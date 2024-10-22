# Gam3r Store 🕹️

**Gam3r Store** é um projeto de e-commerce voltado para a venda de aparelhos eletrônicos. Atualmente, estamos na **Versão 1.0**, com o foco no desenvolvimento do backend e na listagem de produtos. O objetivo é permitir que o usuário explore produtos, adicione ao carrinho, escolha a forma de pagamento e finalize sua compra com entrega.

## 🚀 Visão Geral do Projeto

- **Status**: Em desenvolvimento
- **Versão Atual**: 1.0
- **Tecnologias Principais**: Turborepo, Angular, NestJS, React Native, Prisma, Tailwind CSS, Jest, TypeScript, GitFlow

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


### 🧪 Testes

As funcionalidades implementadas foram testadas utilizando o framework **Jest**, com um total de **18 testes** aprovados até o momento, send:
- **Core**: 11 testes para as regras de negócio
- **Front-end**: 3 testes utilizando o BetTest em relação à listagem dos produtos.
- **Backend**: 4 testes para todas as operações.

## 📦 Estrutura do Projeto

O Gam3r Store está sendo desenvolvido utilizando uma arquitetura **monorepo**, facilitada pelo **Turborepo**, com as seguintes tecnologias:

- **Frontend**: 
  - Angular (em desenvolvimento)
- **Mobile**
  - React Native (planejado)
- **Backend**: 
  - NestJS (planejado)
  - Prisma (para interações com o banco de dados)
- **Estilo**: Tailwind CSS
- **Testes**: Jest
- **Linguagem**: TypeScript

## 🌐 Deploy
A aplicação está disponivel na Vercel, podendo ser acessado em: [Gam3er]('https://game-api-beta.vercel.app')

## 💡 Próximos Passos

### Funcionalidades Planejadas

- **Interface de Usuário (UI)**: Ainda não há interfaces criadas. Planejo desenvolver as seguintes funcionalidades:
- **Filtro de Produtos**: Permitir filtrá-los por categoria, preço, etc.
- **Detalhes do Produto**: Visualizar informações detalhadas de cada produto.
- **Carrinho de Compras**: Adicionar e remover produtos do carrinho.
- **Finalização de Compra**: Escolha da forma de pagamento e endereço de entrega.

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

## 🧪 Realizar Testes

1. Navege até a pasta do projeto:
```sh
cd GamerStore
```
2. Rode o comando:
```sh
npm run test
```

## 🧾 License
Esse README fornece uma visão clara do estado atual do projeto, tecnologias utilizadas, desafios e funcionalidades planejadas, além de guiar outros desenvolvedores sobre como executar o projeto localmente.
