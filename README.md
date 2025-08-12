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

O app contém **125 medicamentos** organizados em:
- 24 arquivos de dados (`new_drugs.ts` até `new_drugs_24.ts`)
- Cada arquivo contém 5 medicamentos
- Informações completas: mecanismo, doses, contraindicações, etc.
- **Todos os medicamentos Zolpidem foram removidos**
- **20 novos medicamentos adicionados com informações complementadas por IA**

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

## ✅ Novos Medicamentos Adicionados

**20 novos medicamentos** foram adicionados com informações complementadas por IA:

### Arquivo new_drugs_22.ts:
- Ácido Fusídico 2% (Gel) - Antibiótico tópico para Gram+
- Ácido Salicílico 2% (Limpador) - Queratolítico para seborreia
- Butorfanol - Agonista-antagonista opioide para sedação
- Calcitriol - Vitamina D ativa para DRC
- Capromorelina - Estimulante de apetite

### Arquivo new_drugs_23.ts:
- Carbonato de Lantânio - Quelante de fósforo não cálcico
- Carboplatina - Antineoplásico para tumores sólidos
- Carprofeno - AINE COX-2 preferencial para dor osteoarticular
- Carvão Ativado - Adsorvente entérico para intoxicações
- Cefadroxil - Cefalosporina 1ª geração oral

### Arquivo new_drugs_24.ts:
- Cefalexina - Pilar em piodermite canina
- Cefazolina - Profilaxia perioperatória
- Metilprednisolona Acetato - Corticosteroide depósito
- Metimazol - Antitireoidiano felino
- Metoclopramida - Pró-cinético/antiemético

**Todos os medicamentos incluem:**
- Informações completas complementadas por IA
- Doses específicas para cães e gatos
- Contraindicações e efeitos adversos
- Interações medicamentosas
- Monitoramento necessário
- Tooltips informativos ("botões ?")
