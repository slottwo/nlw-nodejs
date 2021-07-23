# nlw-nodejs

## O Projeto: NLW Valoriza

- Cadastro de Usuários

- Cadastro de Tags (elogios possíveis)

  - Somente usuário administrador

- Cadastro de elogios

  - ID do usuário que recebeu o elogio
  - ID do usuário que enviou o elogio
  - ID da tag
  - Data da criação

- Autenticação de usuário

  - Gerar token JWT
    - Gerenciar tokens com o `Macaroons`
  - Validar usuário logado nas rotas necessárias

- Listagem de usuários
- Listagem de tags
- Listagem de elogios por usuário

## Regras

- Cadastro de usuário
  - [ ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail
  - [ ] Não é permitido cadastrar usuário sem e-mail
- Cadastro de TAG
  - [ ] Não é permitido cadastrar mais de uma tag com o mesmo nome
  - [ ] Não é permitido cadastrar tag sem nome
  - [ ] Não é permitido o cadastro por usuários que não sejam administradores
- Cadastro de elogios
  - [ ] Não é permitido um usuário cadastrar um elogio para si
  - [ ] Não é permitido cadastrar elogios para usuários inválidos
  - [ ] O usuário precisa estar autenticado na aplicação
