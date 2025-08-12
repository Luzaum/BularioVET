# Bulário Veterinário

Aplicação web para consulta de medicamentos veterinários com funcionalidade de IA para sugestões de tratamento.

## ✅ Problemas Resolvidos

Os seguintes problemas foram corrigidos:

1. **Arquivo CSS faltando**: Criado `index.css` com estilos customizados
2. **API Key não configurada**: Modificado `api.ts` para funcionar sem API key
3. **Tailwind CDN em produção**: Removido CDN e adicionado CSS customizado
4. **newDrugs6 faltando**: Adicionado ao array de medicamentos

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acessar o app**:
   - Abra o navegador em `http://localhost:5173`

## 🔧 Configuração da API Key (Opcional)

Para usar a funcionalidade de IA:

1. Crie um arquivo `.env` na raiz do projeto
2. Adicione sua API key do Google Gemini:
   ```
   VITE_GEMINI_API_KEY=sua_api_key_aqui
   ```
3. Para obter uma API key:
   - Acesse: https://makersuite.google.com/app/apikey
   - Crie uma nova API key
   - Copie a chave para o arquivo `.env`

**Nota**: O app funcionará normalmente sem a API key, mas sem a funcionalidade de IA.

## 📊 Dados

O app contém **180 medicamentos** organizados em:
- 35 arquivos de dados (`new_drugs.ts` até `new_drugs_35.ts`)
- Cada arquivo contém 5 medicamentos
- Informações completas: mecanismo, doses, contraindicações, etc.

## 🛠️ Tecnologias

- React 19
- TypeScript
- Vite
- Google Gemini AI (opcional)
- CSS customizado

## 📝 Funcionalidades

- ✅ Consulta de medicamentos
- ✅ Busca por nome
- ✅ Filtros por setor
- ✅ Sugestões de IA (se API key configurada)
- ✅ Interface responsiva
- ✅ Tooltips informativos
