<img src="https://img.shields.io/github/languages/count/alrlima/nlw2020-server?style=flat-square" />
<img src="https://img.shields.io/github/languages/top/alrlima/nlw2020-server?style=flat-square" />

# Intro
[Next Level Week (NLW)](https://nextlevelweek.com) é uma iniciativa da [Rocket Seat](https://rocketseat.com.br/). Um evento 100% online e gratuito que ocorre em uma semana e tem como objetivo acelerar a evolução dos devs participantes para um nível mais elevado de desenvolvimento.
Nesta versão de 1 a 7 de Junho de 2020 o projeto utilizou NodeJS, React e React-Native.

## Projeto
A proposta de projeto era o desenvolvimento de um aplicativo para cadastro e consulta de pontos de coletas de produtos recicláveis.

## Pré-requisitos
- node

## Etapas
Criando um projeto padrão em node:
```
npm init -y
```
Instalando o pacote que cuida das rotas
```
npm install express
npm install @types/express -D
```
Instalando o type script
```
npm install typescript -D
```
Criando o arquivo de configuração do type script
```
npx tsc --init
```
>Node entende apenas arquivo javascript. Para rodar o servidor node lendo arquivos type script, instalar:
```
npm install ts-node -D
```
Executando um projeto node
```
npx ts-node src/arquivo.ts
```
>npx serve para executar um pacote node que foi instalado. O exemplo acima executa um arquivo específico.

Após a execução do arquivo, abra o browser e acesse a rota na porta informada. p.ex: localhost:3333/users
___
Para não ficar finalizando o servidor a cada mudança de um arquivo (normalmente usando para depuração), instalar o ts-node-dev:
```
npm install ts-node-dev -D
```
Para rodar o projeto com watch:
```
npx ts-node-dev src/server.ts
```
Para não ficar rodando "npx ts-node-dev src/file.ts" toda hora, editar o package.json e adicionar um script:
```json
{
  "dev": "npx ts-node-dev src/server.ts"
}
```
E agora execute o projeto usando seu script:
```
npm run dev
```
> Você pode criar quantos scripts quiser. Um para dev, outro para test, outro para build, deploy, etc.
> 
## Acessando o banco de dados
Para acesso aos dados, será utilizado o **knex**, um framework sql para vários bancos conhecidos.
http://knexjs.org/
```
npm install knex
npm install sqlite3
```
Após criação dos arquivos knex, para criar/atualizar a estrutura de banco de dados, execute:
```
npx knex --knexfile knexfile.ts migrate:latest
```
Criado script no package.json para facilitar a criação/atualização de estrutura de banco de dados:
```json
{
  "migrate": "knex --knexfile knexfile.ts migrate:latest"
}
```
Executando os arquivos migrate:
```
npm run migrate
```
Você também pode criar arquivos de inicialização de dados, chamados seed (veja documentação clicando [aqui](http://knexjs.org/#Seeds-CLI). Para rodar esses arquivos execute:
```
npm run seed
```
## CORS
[Cross-origin resource sharing (CORS ou compartilhamento de recursos de origem cruzada) é uma especificação de uma tecnologia de navegadores que define meios para um servidor permitir que seus recursos sejam acessados por uma página web de um domínio diferente.](https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing)
```
npm install cors 
npm install @types/cors -D
```

## Upload de arquivos/imagens
Para upload, será utilizada a lib multer.
```
npm install multer
npm install @types/multer -D
```

## Validação de dados de entrada no servidor
Para fazer validação dos dados será utilizada a lib do celebrate, que é uma integração do hapi com o express.
```
npm install celebrate
npm install @types/hapi__joi -D
```
