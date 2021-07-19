# nlw-nodejs

## Projeto: "NLW Valoriza"

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
