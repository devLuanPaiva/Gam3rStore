# Gam3r Store 🕹️

**Gam3r Store** é um projeto de e-commerce voltado para a venda de aparelhos eletrônicos. Atualmente, estamos na **primeira versão**, com o foco no desenvolvimento das regras de negócio essenciais. O objetivo é permitir que o usuário explore produtos, adicione ao carrinho, escolha a forma de pagamento e finalize sua compra com entrega.

## 🚀 Visão Geral do Projeto

- **Status**: Em desenvolvimento
- **Versão Atual**: 0.1 (somente regras de negócio)
- **Tecnologias Principais**: Turborepo, Angular, NestJS, React Native, Prisma, Tailwind CSS, Jest, TypeScript, GitFlow

## 🔧 Funcionalidades Implementadas

Até o momento, foram desenvolvidas e testadas as regras de negócio para:

- **Produtos**: Criação e gestão de produtos.
- **Carrinho**: Adicionar e remover itens do carrinho.
- **Parcelamentos**: Definir e calcular diferentes formas de pagamento.
- **Pedido**: Regras para finalizar a compra e definir os detalhes de envio.

### 🧪 Testes

As funcionalidades implementadas foram testadas utilizando o framework **Jest**, com um total de **11 testes** aprovados até o momento.

## 📦 Estrutura do Projeto

O Gam3r Store está sendo desenvolvido utilizando uma arquitetura **monorepo**, facilitada pelo **Turborepo**, com as seguintes tecnologias:

- **Frontend**: 
  - Angular (planejado)
- **Mobile**
  - React Native (planejado)
- **Backend**: 
  - NestJS (planejado)
  - Prisma (para interações com o banco de dados)
- **Estilo**: Tailwind CSS
- **Testes**: Jest
- **Linguagem**: TypeScript

## 🛠 Desafios Enfrentados

Atualmente, estou enfrentando desafios para realizar o **deploy** do projeto na **Vercel** devido à complexidade do **monorepo**. O projeto envolve múltiplas aplicações e pacotes, o que requer ajustes específicos para que a Vercel possa lidar com o monorepo adequadamente.

## 💡 Próximos Passos

### Funcionalidades Planejadas

- **Interface de Usuário (UI)**: Ainda não há interfaces criadas. Planejo desenvolver as seguintes funcionalidades:
- **Listagem e Filtro de Produtos**: Exibir os produtos disponíveis e permitir filtrá-los por categoria, preço, etc.
- **Detalhes do Produto**: Visualizar informações detalhadas de cada produto.
- **Carrinho de Compras**: Adicionar e remover produtos do carrinho.
- **Finalização de Compra**: Escolha da forma de pagamento e endereço de entrega.

### Melhoria da Estrutura de Deploy

- Configurar o deploy de forma eficiente para a Vercel ou explorar alternativas como **Netlify** para lidar melhor com a arquitetura monorepo.

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
