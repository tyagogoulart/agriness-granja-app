# APP Mobile do Desafio Mobile Developer - Agriness

Projeto desenvolvido como requisito para o Desafio Mobile Developer - Agriness,
um app escrito em React Native, utilizando Expo, que consome a API Rest deste desafio.

## Dependência

Este projeto consome a API Rest do `agriness-granja-api`. Por isso, para rodar o app sem problemas, você precisa antes rodar o [agriness-granja-api](http://github.com/tyagogoulart/agriness-granja-api/).

## Modificações necessárias

No arquivo `api/services.ts`, será necessária a modificação do baseURL para o IP de inicialização do `agriness-granja-api` em sua máquina local, por exemplo: `baseURL: 'http://10.0.0.101:8000/api'`.

## Rodando o projeto


Após clonar este repositório e certificar-se de ter o `Node v12` e o `npm` em sua máquina, instale as dependências:

`npm install`
    
Antes de rodar o app, certifique-se de ter um emulador aberto, celular conectado ou pelo app Expo, [veja nos docs do Expo](https://docs.expo.io/get-started/installation/).

Com tudo pronto, inicie o app, digitando um dos comandos na pasta raíz:

`npm run android`

`npm run ios`

Obs.: Este app não foi testado em ambiente iOS.

## Testes

O app conta com testes unitários e para rodá-los, execute um dos comandos abaixo:

Para executar todos os testes do projeto:

`npm run test`

Para rodar automaticamente os testes a cada atualização de arquivo:

`npm run test:watch`

Para rodar apenas os testes relacionados aos arquivos modificados:

`npm run test:staged`
