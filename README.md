# nextlevelweek2020
## REQUISITOS ##
- node

npm init -y
cria um projeto padrão em node

npm install express
cuida das rotas

npm install @types/express -D

instalar o type script
npm install typescript -D

criar arquivo de configuração do type script
npx tsc --init

node arquivo.ts -> isso não funciona pois o node entende apenas arquivo javascript e o arquivo é type script

para rodar o servidor node com type script
npm install ts-node -D

npx serve para executar um pacote node que foi instalado
npx ts-node src/arquivo.ts

agora é só abrir o browser e acessar a rota na porta informada: localhost:3333/users

para não ficar finalizando o servidor a cada mudança para depuração, instalar o ts-node-dev
npm install ts-node-dev -D

para rodar com watch
npx ts-node-dev src/server.ts

para não ficar rodando "npx ts-node-dev src/file.ts" toda hora, editar o package.json e adicionar um script para facilitar a vida
"dev": "npx ts-node-dev src/server.ts"

para executar, rode:
npm run dev


knex é um framework sql para vários bancos conhecidos.
http://knexjs.org/

npm install knex
npm install sqlite3

npx knex migrate:latest --knexfile knexfile.ts migrate:latest

criado script no package.json para facilitar a criação/atualização de estrutura de banco de dados:
"migrate": "knex migrate:latest --knexfile knexfile.ts migrate:latest"

agora basta chamar:
npm run migrate

para rodar os arquivos de inicialização de dados (seed)
npm run seed

CORS
npm install cors 
npm install @types/cors -D

uplooad de imagens
npm install multer
npm install @types/multer -D

--para fazer validação dos dados (celkebrate é uma integração do hapi com o express)
npm install celebrate
-- para funcionar o intelisense
npm install @types/hapi__joi -D