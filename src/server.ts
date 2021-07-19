import express, { response } from "express";

const app = express();

/**
 * GET    -> Buscar uma informação
 * POST   -> Inserir (Criar) uma informação
 * PUT    -> Alterar uma informação
 * DELETE -> Remover um dado
 * PATCH  -> Alterar uma informação específica (ex: alterar a senha, ou o avatar, de um usuário)
 */

// Rotas
app.get("/test", (request, response) => {
  // Request -> Input
  // Response -> Return
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW: Método POST");
})

// http:localhost:3000
app.listen(3000, () => console.log("Sever is Running"));

