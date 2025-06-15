# Gam3r Store 🕹️

<div align="center">
  
</br>

<img src="https://ik.imagekit.io/p0mm3nebo/gameStore/logo.png?updatedAt=1750013857979" width="250px">

</br>

  <div data-badges>
  <img src="https://img.shields.io/badge/turborepo-%23000000.svg?style=for-the-badge&logo=turborepo&logoColor=white" alt="Turborepo" />
  <img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/react%20native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/prisma-%232D3748.svg?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/postgresql-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/gitflow-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white" alt="GitFlow" />
  <img src="https://img.shields.io/badge/karma-%23D04A36.svg?style=for-the-badge&logo=karma&logoColor=white" alt="Karma" />
  <img src="https://img.shields.io/badge/cypress-%23172a3a.svg?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress" />
  <img src="https://img.shields.io/badge/jasmine-%238A4182.svg?style=for-the-badge&logo=jasmine&logoColor=white" alt="Jasmine" />
  <img src="https://img.shields.io/badge/html5-%23e34f26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/css3-%231572b6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</div>

</div>


**Gam3r Store** é um projeto de e-commerce voltado para a venda de aparelhos eletrônicos.

## 🚀 Visão Geral do Projeto

- **Status**: Em desenvolvimento
- **Versão Atual**: 3.0
- **Tecnologias Principais**: Turborepo, Angular, NestJS, React Native, Prisma, Tailwind CSS, Jest, TypeScript, GitFlow, Karma, Cypress, Jasmine

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
- **Criar Pedido**: Cadastrar um novo pedido para entrega.
- **Listar Pedidos**: Listar todos os Pedidos.
- **Listar Pedidos por Id**: Retornar um pedido após busca por id.
- **Deletar Pedidos por Id**: Deletar um pedido após busca por id.

### Interfaces:
- **Listar Produtos**: Listagem de todos os produtos, onde cada card contém o nome, estrelas, foto, preço e descrição.
- **Filtrar Produtos**: Friltragem de todos os produtos, onde o usuário insere o nome do produto no campo de busca e assim é filtrado.
- **Carrinho**: O usuário pode inserir quantos produtos quiser no carrinho, aumentar e diminuir a quantidade, e remover produto.
- **Pagamento**: Após fechar o carrinho, o usuário vai para a tela de pagamento, onde preenche os dados de entrega e a forma de , e finaliza o pedido.
- **Especificações do Produto**: O usuário pode visualizar mais detalhes de um produto em especifico, como descição, especificações, metragem de preço, avaliações de usuários e uma avaliação em video sobre o mesmo.

### 🧪 Testes

As funcionalidades implementadas foram testadas utilizando **Jest, Jasmine e Cypress**, com um total de **45 testes** aprovados até o momento, sendo:
- **Core**: 11 testes para as regras de negócio
- **Front-end**: 23 testes, sendo 16 unitários e de integração, e 7 testes E2E.
- **Backend**: 9 testes para todas as operações.

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
- **Testes**: Jest, Cypress, Jasmine
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

## 🎲 Tutorial de Uso

### Adicionar Produto ao Carrinho
- Na tela inicial, cada card de produto possui um botão "Adicionar". Basta clicar nesse botão para adicionar o produto ao carrinho.

### Visualizar Carrinho
- No cabeçalho do site, há um ícone de carrinho. Clique nesse ícone para acessar a página do carrinho e visualizar os itens adicionados.

### Página de Pagamento
- Na página do carrinho, há um passo (step) com a opção de "Pagamento". Nesse passo, um card mostra o preço total e um botão "Continuar". Clique no botão para prosseguir para o pagamento.

### Especificações do Produto
- Para visualizar as especificações do produto, clique no título do produto. Esse recurso está disponível tanto nos cards da tela inicial quanto nos cards da página do carrinho.


## 🌌 Interfaces
### Tela Inicial
![Home](https://i.ibb.co/9VBsD6H/Captura-de-tela-2024-10-30-142933.png)

### Buscar Produto
![Busca](https://i.ibb.co/vZJ2nnp/Captura-de-tela-2024-10-30-142946.png)

### Carrinho
![Carrinho](https://i.ibb.co/gv9nmkJ/Captura-de-tela-2024-11-04-160655.png)

### Pagamento
![Carrinho](https://i.ibb.co/9ypBmsW/Captura-de-tela-2024-11-04-160912.png)

### Sucesso
![Carrinho](https://i.ibb.co/30nRP0M/Captura-de-tela-2024-11-04-160933.png)

### Especificações do Produto
![Especificações](https://i.ibb.co/WN92RzT/Captura-de-tela-2024-11-08-163649.png)

## 🧾 License
Esse README fornece uma visão clara do estado atual do projeto, tecnologias utilizadas, desafios e funcionalidades planejadas, além de guiar outros desenvolvedores sobre como executar o projeto localmente.
