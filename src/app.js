const express = require("express");
const cors = require("cors");

 const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title ,url, techs } = request.body;
 
  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  }

  repositories.push(repository);
  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
  const { id } = request.params;
  const { title ,url, techs } = request.body;

  const indexRepository = repositories.findIndex( repository => repository.id == id );
  
  if (!indexRepository) {
    return response.status(400).json({ error : "Repository does not exists."});
  } 
  
  const repository = {
    id,
    title,
    url,
    techs
  }

  repositories[indexRepository] = repository;
  return response.status(400).json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
