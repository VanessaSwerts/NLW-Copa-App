
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/VanessaSwerts/NLW-Copa-App?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/VanessaSwerts/NLW-Copa-App">

  <a href="https://github.com/VanessaSwerts/NLW-Copa-App/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VanessaSwerts/NLW-Copa-App">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

</p>

<h4 align="center">
	✅ NLW-Copa App - Concluído ✅
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-layout">Layout</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-estrutura-de-arquivos">Estrutura de arquivos</a> • 
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autores">Autores</a> •
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

10° edição da Next Level Week da [Rocketseat](https://rocketseat.com.br/), onde na trilha Ignite, construimos o backend e front-end (web e mobile) de um bolão da copa do mundo.

---

## 🎨 Layout

![mobileAll](https://user-images.githubusercontent.com/57146734/200203794-bb592af1-c773-4605-88f3-b7af17a8288f.png)

---

## 🚀 Como executar o projeto

Este projeto é dividido em três partes:
1. [Backend](https://github.com/VanessaSwerts/NLW-Copa-Server)
2. [Frontend - Web](https://github.com/VanessaSwerts/NLW-Copa-Web)
3. Frontend - Mobile (Neste repositório)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Expo](https://expo.io).

#### Executando o projeto

##### 🧭 Rodando a aplicação Frontend

   ```bash
    # Clone este repositório
    $ git clone https://github.com/VanessaSwerts/NLW-Copa-App.git

    # Acesse a pasta do projeto no seu terminal/cmd
    $ cd NLW-Copa-App

    # Instale as dependências
    $ npm install

    # Execute a aplicação
    $ expo start

    # Acesse o aplicativo expo e veja o projeto em execução, clique no aplicativo em execução.
   ```

---

## 📁 Estrutura de arquivos

Atualizado 06/11/2022


```
nlw-copa-app
├─ .expo-shared
│  └─ assets.json
├─ .gitignore
├─ app.json
├─ App.tsx
├─ assets
│  ├─ adaptive-icon.png
│  ├─ favicon.png
│  ├─ icon.png
│  └─ splash.png
├─ babel.config.js
├─ metro.config.js
├─ package-lock.json
├─ package.json
├─ src
│  ├─ @types
│  │  ├─ navigation.d.ts
│  │  └─ svg.d.ts
│  ├─ assets
│  │  └─ logo.svg
│  ├─ components
│  │  ├─ Button.tsx
│  │  ├─ ButtonIcon.tsx
│  │  ├─ EmptyMyPollList.tsx
│  │  ├─ EmptyPollList.tsx
│  │  ├─ EmptyRakingList.tsx
│  │  ├─ Flag.tsx
│  │  ├─ Game.tsx
│  │  ├─ Guesses.tsx
│  │  ├─ Header.tsx
│  │  ├─ Input.tsx
│  │  ├─ Loading.tsx
│  │  ├─ Option.tsx
│  │  ├─ Participants.tsx
│  │  ├─ PollCard.tsx
│  │  ├─ PollHeader.tsx
│  │  └─ Team.tsx
│  ├─ contexts
│  │  └─ AuthContext.tsx
│  ├─ hooks
│  │  └─ useAuth.tsx
│  ├─ routes
│  │  ├─ app.routes.tsx
│  │  └─ index.tsx
│  ├─ screens
│  │  ├─ Details.tsx
│  │  ├─ Find.tsx
│  │  ├─ New.tsx
│  │  ├─ Polls.tsx
│  │  └─ SignIn.tsx
│  ├─ services
│  │  └─ api.ts
│  └─ styles
│     └─ theme.ts
└─ tsconfig.json

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Mobile**  ([React Native](http://www.reactnative.com/))
- **Dependências**:
  -   **[Axios](https://github.com/axios/axios)**
  -   **[Expo](https://expo.io/)**
  -   **[Expo Auth Session](https://docs.expo.dev/versions/latest/sdk/auth-session/)**
  -   **[Expo App Loading](https://docs.expo.dev/versions/latest/sdk/app-loading/)**
  -   **[Country List](https://github.com/fannarsh/country-list)**
  -   **[Day JS](https://github.com/iamkun/dayjs)**
  -   **[Native Base](https://nativebase.io)**
  -   **[Phosphor React Native](https://github.com/duongdev/phosphor-react-native)**
  -   **[React Native Country Flag](https://github.com/YannisHofmann/react-native-country-flag)**
  -   **[React Native SVG](https://github.com/software-mansion/react-native-svg)**
  -   **[React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer)**
  -   **[Typescript](https://www.typescriptlang.org)**

Veja o arquivo  [package.json](https://github.com/VanessaSwerts/NLW-Copa-App/blob/master/package.json)

---

## 🦸 Autores

<table>
  <tr>
    <td align="center"><a href="https://github.com/vanessaSwerts/"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/57146734?v=4" width="100px;" alt=""/><br /><sub><b>Vanessa Swerts</b></sub></a></td>
  </tr>
</table>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
