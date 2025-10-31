import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const SYSTEM_PROMPT = `Você é o assistente virtual do GoFit, uma plataforma dedicada a saúde, qualidade de vida e bem-estar através do exercício físico.

INSTRUÇÕES IMPORTANTES:
1. Você DEVE responder APENAS sobre tópicos relacionados a:
   - Exercícios físicos e treinos
   - Nutrição e alimentação saudável
   - Saúde e bem-estar
   - Benefícios do exercício (físico e mental)
   - Qualidade de vida
   - Prevenção de doenças através de hábitos saudáveis
   - Saúde mental e exercício
   - Dicas de motivação para vida saudável

2. Se o usuário perguntar sobre QUALQUER outro assunto que não esteja relacionado aos tópicos acima, você deve educadamente redirecionar a conversa, dizendo algo como:
   "Desculpe, sou especializado apenas em assuntos relacionados a saúde, fitness, exercícios e bem-estar. Posso ajudar você com informações sobre treinos, nutrição, benefícios do exercício ou qualidade de vida. Como posso ajudar?"

3. Sempre seja:
   - Amigável e motivador
   - Claro e objetivo nas respostas
   - Baseado em informações confiáveis
   - Encorajador de hábitos saudáveis

4. NUNCA forneça diagnósticos médicos. Sempre sugira consultar profissionais de saúde para questões específicas de saúde.

5. Responda em português do Brasil, de forma natural e conversacional.`;

export async function sendMessageToAI(
  userMessage: string,
  conversationHistory: Message[]
): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  // console.log("🔑 API Key presente?", apiKey ? "Sim" : "Não");

  if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
    throw new Error(
      "CONFIG_ERROR: Crie um arquivo .env na raiz do projeto com VITE_GEMINI_API_KEY=sua_chave_aqui"
    );
  }

  try {
    // console.log("📤 Enviando mensagem para a API Gemini...");

    // Inicializar cliente do Google Gemini
    const ai = new GoogleGenAI({ apiKey });

    // Construir histórico de conversa
    const history = conversationHistory
      .slice(-6) // Últimas 6 mensagens para contexto
      .map((msg) => ({
        role: msg.isUser ? "user" : "model",
        parts: [{ text: msg.text }],
      }));

    // Preparar o conteúdo completo com system prompt e histórico
    const contents = [
      {
        role: "user" as const,
        parts: [{ text: SYSTEM_PROMPT }],
      },
      {
        role: "model" as const,
        parts: [
          {
            text: "Entendido! Sou o assistente virtual do GoFit e vou ajudar apenas com questões relacionadas a saúde, exercícios, nutrição, bem-estar e qualidade de vida. Estou pronto para ajudar!",
          },
        ],
      },
      ...history,
      {
        role: "user" as const,
        parts: [{ text: userMessage }],
      },
    ];

    // Enviar mensagem usando o SDK oficial
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
    });

    // console.log("✅ Resposta recebida com sucesso");

    // Extrair texto da resposta
    const text = response.text;

    if (!text) {
      throw new Error("RESPONSE_ERROR: A API retornou uma resposta vazia");
    }

    return text;
  } catch (error: any) {
    // console.error("❌ Erro ao enviar mensagem:", error);

    // Tratamento de erros específicos
    if (
      error.message?.includes("API_KEY_INVALID") ||
      error.message?.includes("API key not valid")
    ) {
      throw new Error(
        "API_ERROR: API key inválida. Verifique:\n" +
          "1. Acesse: https://aistudio.google.com/app/apikey\n" +
          "2. Crie uma nova API key\n" +
          "3. Copie e cole no arquivo .env\n" +
          "4. Reinicie o servidor (npm run dev)"
      );
    }

    if (error.message?.includes("quota") || error.message?.includes("429")) {
      throw new Error(
        "RATE_LIMIT: Limite de requisições atingido. Aguarde alguns minutos."
      );
    }

    if (
      error.message?.includes("403") ||
      error.message?.includes("permission")
    ) {
      throw new Error(
        "API_ERROR: API key sem permissão ou região não suportada."
      );
    }

    throw error;
  }
}
