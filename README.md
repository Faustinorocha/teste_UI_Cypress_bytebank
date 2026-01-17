# Testes E2E Cypress - Bytebank 🚀

Repositório com **testes end-to-end** para a aplicação **Bytebank** (React + JSON Server API) usando **Cypress**.

[![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-brightgreen)](https://dashboard.cypress.io)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)](https://github.com/Faustinorocha/teste_UI_Cypress_bytebank/actions)

## 🚀 Tecnologias
- **Frontend**: React (Create React App)
- **Backend**: JSON Server + JWT Auth  
- **Testes**: Cypress (E2E)
- **Node.js**: 14+

## 📋 Pré-requisitos

### 1. **API Bytebank** (Backend Mock)
```bash
git clone https://github.com/SEU_USUARIO/bytebank-api.git
cd bytebank-api
npm install
npm run start-api
API roda em: http://localhost:8000

2. Aplicação Frontend
bash
git clone https://github.com/SEU_USUARIO/bytebank-frontend.git
cd bytebank-frontend
npm install
npm start
App roda em: http://localhost:3000

3. Testes Cypress (Este repo)
bash
git clone https://github.com/Faustinorocha/teste_UI_Cypress_bytebank.git
cd teste_UI_Cypress_bytebank
npm install
npx cypress open    # Modo interativo
# ou
npx cypress run     # Headless
🧪 Testes Implementados
Teste	Descrição	Status
cadastro.cy.ts	Cadastro de novo usuário	✅
transacao.cy.ts	Login + Depósito + Verificação saldo	✅
lista-transacoes.cy.ts	Lista de transações	✅
Cobertura: Login, Cadastro, Depósitos, Validação Saldo, Lista Transações.

🔧 Comandos Cypress
bash
# Instalar dependências
npm install

# Abrir interface Cypress
npx cypress open

# Rodar todos os testes (headless)
npx cypress run

# Rodar teste específico
npx cypress run --spec "cypress/e2e/transacao.cy.ts"

# Rodar com vídeo + screenshot
npx cypress run --headed --browser chrome
📁 Estrutura do Projeto
text
teste_UI_Cypress_bytebank/
├── cypress/
│   ├── e2e/           # Testes (.cy.ts)
│   ├── fixtures/      # Dados mock
│   ├── support/       # Commands personalizados
│   └── screenshots/   # Evidências falhas
├── cypress.config.ts # Config Cypress
├── package.json
└── README.md
🛠️ Comandos Customizados Criados
Comando	Descrição
cy.getByData()	Seletor data-test ou data-testid
cy.getSaldo()	Extrai e parse saldo brasileiro (R$ 700 → 700)
cy.loginViaUi()	Login completo pela UI
cy.submeterFormularioCadastro()	Cadastro automatizado
🎯 Endpoints Testados
text
POST /public/cadastrar     # Cadastro
POST /public/login         # Login JWT
POST /transacoes           # Depósito
GET /saldo                 # Saldo atual
GET /transacoes            # Lista transações
🔍 Como Executar Ambiente Completo
3 Terminais
bash
# Terminal 1: API
cd bytebank-api && npm run start-api

# Terminal 2: Frontend  
cd bytebank-frontend && npm start

# Terminal 3: Testes
cd teste_UI_Cypress_bytebank && npx cypress open
Teste Rápido (apenas Cypress)
bash
npx cypress run --headed
📊 Relatórios Automáticos
Vídeos: cypress/videos/

Screenshots: cypress/screenshots/

CI/CD: GitHub Actions configurado

🤝 Contribuições
Fork o projeto

Crie sua feature branch (git checkout -b feature/novo-teste)

Commit (git commit -m 'feat: novo teste de saque')

Push (git push origin feature/novo-teste)

Abra Pull Request

📄 Licença
MIT License - veja LICENSE.

Criado por: Faustino Rocha | Cypress + Bytebank 🚀

text
undefined