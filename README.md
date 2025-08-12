# Bulário Veterinário

Aplicação web para consulta de medicamentos veterinários com funcionalidade de IA para sugestões de tratamento.

## ✅ Problemas Resolvidos

Os seguintes problemas foram corrigidos:

1. **Design restaurado**: Voltou ao design original com Tailwind CSS
2. **Medicamentos Zolpidem removidos**: Todos os medicamentos que começam com "Zolpidem" foram removidos
3. **Arquivos de dados limpos**: Removidos arquivos desnecessários
4. **API Key opcional**: App funciona sem API key configurada

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

O app contém **105 medicamentos** organizados em:
- 21 arquivos de dados (`new_drugs.ts` até `new_drugs_21.ts`)
- Cada arquivo contém 5 medicamentos
- Informações completas: mecanismo, doses, contraindicações, etc.
- **Todos os medicamentos Zolpidem foram removidos**

## 🛠️ Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS (CDN)
- Google Gemini AI (opcional)

## 📝 Funcionalidades

- ✅ Consulta de medicamentos
- ✅ Busca por nome
- ✅ Filtros por setor
- ✅ Sugestões de IA (se API key configurada)
- ✅ Interface responsiva
- ✅ Tooltips informativos
- ✅ Design original restaurado

## 🗑️ Medicamentos Removidos

Todos os medicamentos que começavam com "Zolpidem" foram removidos:
- Zolpidem (base)
- Zolpidem Tartarato
- Zolpidem Sulfato
- Zolpidem Cloridrato
- Zolpidem Hemisulfato
- Zolpidem Hemimaleato
- Zolpidem Hemitorato
- Zolpidem Hemifumarato
- Zolpidem Hemioxalato
- Zolpidem Hemicitrato
- Zolpidem Hemisuccinato
- Zolpidem Hemiadipato
- Zolpidem Hemifosfato
- Zolpidem Hemibrometo
- E todas as outras variações
