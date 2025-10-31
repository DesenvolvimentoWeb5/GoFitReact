# Chatbot GoFit - Documentação

## Sobre o Chatbot

O chatbot do GoFit é um assistente virtual inteligente que ajuda os usuários com informações sobre:
- Exercícios físicos e treinos
- Nutrição e alimentação saudável
- Saúde e bem-estar
- Benefícios do exercício (físico e mental)
- Qualidade de vida

O chatbot é **restrito** a esses tópicos e redirecionará educadamente qualquer pergunta fora do escopo.

## Características

- **Botão flutuante**: Disponível em todas as páginas do site
- **Interface moderna**: Design responsivo e animações suaves
- **IA integrada**: Usa Google Gemini API para respostas inteligentes
- **Contexto de conversa**: Mantém o histórico para conversas mais naturais
- **Segurança**: Filtros de conteúdo configurados para respostas seguras

## Configuração

### 1. Obter API Key do Google Gemini

1. Acesse: [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Faça login com sua conta Google
3. Clique em **"Create API Key"**
4. Copie a chave gerada

**Nota**: A API do Google Gemini tem um tier gratuito generoso com limite de requisições por minuto.

### 2. Configurar variável de ambiente

1. Crie um arquivo `.env` na raiz do projeto:
   ```bash
   cp .env.example .env
   ```

2. Abra o arquivo `.env` e adicione sua chave:
   ```
   VITE_GEMINI_API_KEY=sua_chave_aqui
   ```

3. **IMPORTANTE**: Nunca commite o arquivo `.env` no git. Ele já está no `.gitignore`.

### 3. Instalar dependências (se ainda não tiver)

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

## Estrutura de Arquivos

```
src/
├── components/
│   └── Chatbot/
│       ├── index.tsx           # Componente principal do chat
│       └── ChatMessage.tsx     # Componente de mensagem individual
└── utils/
    └── chatService.ts          # Serviço de comunicação com a API
```

## Como Funciona

### System Prompt

O chatbot usa um **system prompt** que define seu comportamento:
- Responde apenas sobre tópicos relacionados a saúde e fitness
- Redireciona educadamente perguntas fora do escopo
- É motivador e amigável
- Não fornece diagnósticos médicos

Este prompt está em `src/utils/chatService.ts` e pode ser customizado conforme necessário.

### Histórico de Conversa

O chatbot mantém as **últimas 6 mensagens** como contexto para a IA, permitindo conversas mais naturais e contextualizadas.

## Personalização

### Alterar o System Prompt

Edite a constante `SYSTEM_PROMPT` em `src/utils/chatService.ts`:

```typescript
const SYSTEM_PROMPT = `Seu novo prompt aqui...`;
```

### Alterar Cores do Chat

As cores do chat usam Tailwind CSS. Para mudar as cores principais:

```tsx
// Em src/components/Chatbot/index.tsx
// Procure por "from-green-500 to-green-600" e altere para suas cores
className="bg-gradient-to-r from-blue-500 to-blue-600"
```

### Mudar Posição do Botão

O botão está posicionado com:
```tsx
className="fixed bottom-6 right-6"
```

Altere `bottom-6` e `right-6` conforme necessário.

## Alternativas de IA

Se preferir usar outra API de IA, você pode modificar `src/utils/chatService.ts`:

### OpenAI (ChatGPT)

```typescript
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history,
      { role: 'user', content: userMessage }
    ]
  })
});
```

### Anthropic Claude

```typescript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01'
  },
  body: JSON.stringify({
    model: 'claude-3-haiku-20240307',
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: history
  })
});
```

## Problemas Comuns

### "API key não configurada"

- Verifique se o arquivo `.env` existe na raiz do projeto
- Verifique se a variável se chama exatamente `VITE_GEMINI_API_KEY`
- Reinicie o servidor de desenvolvimento após criar/modificar o `.env`

### Chatbot não aparece

- Verifique o console do navegador para erros
- Certifique-se de que não há erros de TypeScript
- Verifique se o componente foi importado corretamente em `src/routes/index.tsx`

### Respostas lentas

- A velocidade depende da API utilizada
- O Google Gemini Flash é otimizado para respostas rápidas
- Verifique sua conexão de internet

### Erro de CORS

- As APIs modernas geralmente suportam requisições do browser
- Se tiver problemas, considere criar um proxy no backend

## Melhorias Futuras

Possíveis melhorias que podem ser implementadas:

1. **Persistência**: Salvar histórico no localStorage
2. **Feedback**: Botões de "útil/não útil" nas respostas
3. **Sugestões**: Mostrar perguntas sugeridas
4. **Avatar**: Adicionar avatar do usuário e do bot
5. **Typing indicator**: Indicador mais elaborado de digitação
6. **Voice input**: Entrada por voz
7. **Modo offline**: Respostas básicas sem internet
8. **Analytics**: Rastrear perguntas mais comuns

## Licença

Este chatbot faz parte do projeto GoFit.
