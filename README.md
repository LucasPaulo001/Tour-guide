# Guia Turístico - Paraíba 🌵
### Sobre o projeto
- Mini projeto da disciplina de LSW (Linguagens de script para a web), onde é criado um guia com com um Banco de dados local em json e uma biblioteca para servir o backend de acordo com o Banco de dados .JSON
### Funcionalidades
- Cadastrar locais, deletar locais e editar locais
### Tecnologias utilizadas
- `` HTML5 ``
- `` CSS3 ``
- `` JavaScript ``
- `` JSON Server - Para simular o nosso BD ``

## Acessando o projeto 📂
- Clone este repositório
  ```
    git clone https://github.com/LucasPaulo001/Tour-guide.git
  ```
- Na raiz do projeto abra o terminal e baixe a dependência do JSON Server
  ```
  npm install json-server
  ```
- Para rodar a aplicação no servidor insira no terminal o seguinte comando
  ```
  json-server locais.json --static ./public
  ```
- Agora compie o link do servidor que o json server irá exibir em "index"
  ```
  JSON Server started on PORT :3000
  Press CTRL-C to stop
  Watching locais.json...

  ♡( ◡‿◡ )

  Index:
  http://localhost:3000/

  Static files:
  Serving ./public directory if it exists

  Endpoints:
  http://localhost:3000/locais


  ```
