# 🚀 Desafio Prático - dti digital 

Bem-vindo(a). Este é o desafio para vaga de Desenvolvimento na DTI Digital.

O objetivo deste desafio é desenvolver um sistema de estoque.

# 🧠 Contexto

O desafio será implementar um estoque que deverá ter as seguintes funcionalidades:
- [ ] Catálogo de produtos
- [ ] Criar produtos
- [ ] Editar produtos
- [ ] Deletar produtos

## 📋 Arquitetura do projeto

Escolhir modelar o projeto seguindo a arquitetura MVC, visando separar o softwares em 3 camadas: o modelo (manipulação da lógica de dados), a visão (a interface do usuário) e o controlador (fluxo de aplicação). Pensando na facilidade de manutenção e no reaproveitamento em outros projetos.


## :rocket: Technologies
  - [NodeJs](https://nodejs.org/en/)
  - [React](https://pt-br.reactjs.org/)
  - [Sequelize](https://sequelize.org/)
  - [Sqlite](https://www.sqlite.org/)
  - [Yarn](https://yarnpkg.com/)
  

### :computer: API
```bash
# Acesse o diretório server
$ cd server

# Instale as dependencias 
$ yarn install

# Crie o banco de dados
$ yarn sequelize db:migrate

# Inicie a API
$ yarn dev
```

### :computer: Web 
 ```bash
# Acesse o diretório web
$ cd web

# Instale as dependencias 
$ yarn install

# Inicie a Aplicação Web
$ yarn start
```
