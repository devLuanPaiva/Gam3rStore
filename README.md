# Gam3r Store 🕹️

**Gam3r Store** é um projeto de e-commerce voltado para a venda de aparelhos eletrônicos.

## 🚀 Visão Geral do Projeto

- **Status**: Em desenvolvimento
- **Versão Atual**: 2.0
- **Tecnologias Principais**: Turborepo, Angular, NestJS, React Native, Prisma, Tailwind CSS, Jest, TypeScript, GitFlow, Karma, Cypress

## 🔧 Funcionalidades Implementadas

Até o momento, foram desenvolvidas e testadas:
### Regras de Negócio:
- **Produtos**: Criação e gestão de produtos.
- **Carrinho**: Adicionar e remover itens do carrinho.
- **Parcelamentos**: Definir e calcular diferentes formas de pagamento.
- **Pedido**: Regras para finalizar a compra e definir os detalhes de envio.

### Endpoins:
- **Cadastrar Produto**: Cadastrar novo produto ao banco.
- **Listar Produtos**: Listagem de todos os produtos cadastrados.
- **Listar Produto por Id**: Retornar produto após busca por Id.
- **Deletar Produto**: Deletar produto por Id.

### Interfaces:
- **Listar Produtos**: Listagem de todos os produtos, onde cada card contém o nome, estrelas, foto, preço e descrição.
- **Filtrar Produtos**: Friltragem de todos os produtos, onde o usuário insere o nome do produto no campo de busca e assim é filtrado.
- **Carrinho**: O usuário pode inserir quantos produtos quiser no carrinho, aumentar e diminuir a quantidade, e remover produto.

### 🧪 Testes

As funcionalidades implementadas foram testadas utilizando **Jest e Cypress**, com um total de **25 testes** aprovados até o momento, sendo:
- **Core**: 11 testes para as regras de negócio
- **Front-end**: 5 testes unitários e de integração, e 5 testes E2E.
- **Backend**: 4 testes para todas as operações.

## 📦 Estrutura do Projeto

O Gam3r Store está sendo desenvolvido utilizando uma arquitetura **monorepo**, facilitada pelo **Turborepo**, com as seguintes tecnologias:

- **Frontend**: 
  - Angular (em desenvolvimento)
- **Mobile**
  - React Native (planejado)
- **Backend**: 
  - NestJS (em desenvolvimento)
  - Prisma (para interações com o banco de dados)
- **Estilo**: Tailwind CSS
- **Testes**: Jest, Cypress
- **Linguagem**: TypeScript

## 🌐 Deploy
A aplicação está disponivel na Vercel, podendo ser acessado em: [Gam3er](https://game-api-beta.vercel.app)

## 📂 Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js (versão recomendada: 18.x.x ou superior)
- Yarn ou NPM

### Instalação e execução
1. Clone o repositório:
```sh
git clone https://github.com/devLuanPaiva/Gam3rStore.git
```
2. Navege até a pasta do projeto:
```sh
cd GamerStore
```
3. Instale as dependências:
```bash
npm install
# ou 
yarn install
```
4. Inicie o servidor de desenvolvimento:

```bash
    turbo dev
    # ou
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    # ou
    bun dev
```
5. Abra o navegador e acesse `http://localhost:3000`, ou baixe o app [ExpoGo](https://expo.dev/go) para acessar a versão mobile em seu smartphone.


## 🌌 Interfaces
### Tela Inicial
![Home](https://i.ibb.co/1Jfd2pv/Captura-de-tela-2024-10-30-142933.png)

### Buscar Produto
![Busca](https://i.ibb.co/vVgyw46/Captura-de-tela-2024-10-30-142946.png)

### Carrinho
![Carrinho](https://i.ibb.co/9rG2pwq/Captura-de-tela-2024-10-30-143008.png)

## 🧾 License
Esse README fornece uma visão clara do estado atual do projeto, tecnologias utilizadas, desafios e funcionalidades planejadas, além de guiar outros desenvolvedores sobre como executar o projeto localmente.
