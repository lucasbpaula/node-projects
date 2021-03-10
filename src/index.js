const express = require("express");
const { uuidv4 } = require("uuid");

const projects = [];

const app = express();

/**
 * Informar para o express que nossa aplicacao recebera arquivos JSON
 *
 * obs: deve vir antes das rotas
 */
app.use(express.json());

app.get("/projects", (request, response) => {
  // const { title, owner } = request.query;

  // console.log(title);
  // console.log(owner);

  return response.json(projects);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuidv4(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put("/projects/:id", (request, response) => {
  const { id } = request.params;

  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 2", "Projeto 3"]);
});

app.listen(3333, () => {
  console.log(`🚀 Back startou!`);
});
