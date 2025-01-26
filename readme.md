//MODULO GULP

//instalação do gulp
Inicialmente instalamos o CLI (Command Line Interface) do Gulp de forma global:

$ npm install --global gulp-cli


inicializar o node.js no projeto
$ npm init


Após isso, instalamos o Gulp como dependência de desenvolvimento para o projeto:
$ npm install --save-dev gulp


criar um arquivo chamado gulpfile.js. É nele que escreveremos as tarefas que serão automatizadas. 

alterar o arquivo package.json, 

"scripts": {
     "gulp": "gulp", 
     "test": "echo \"Error: no test specified\" && exit 1“ 
     }, 
     
     
Com isso, na pasta do projeto, podemos executar o comando npm run gulp, via terminal.
$ npm run gulp


Tipos de tarefas 
O Gulp funciona a base de dois tipos tarefas: 

1) Pública: que pode ser acessada através do comando: npm run gulp NOME_DA_TAREFA 

2) Privada: que só é acessível apenas por outra tarefa no Gulp file. Ao executar o comando npm run gulp iremos receber uma mensagem de erro, informando que a tarefa padrão (default) não foi encontrada, isso ocorre pois no arquivo gulpfile.js não existe uma função para o exports.default.



------------------------------------------
INSTALAR PLUGIN DO GULP
------------------------------------------
//plugin para converter archivos sass
$ npm install --save-dev gulp-sass

//plugin para comprimir arquivos JS
$ npm install --save-dev gulp-uglyfy