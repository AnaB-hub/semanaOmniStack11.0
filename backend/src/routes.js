const express = require('express');

const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

routes.post('/sessions', sessionController.create);

module.exports = routes;

/**
 * Tipos de parâmetros
 * 
 * Query params: parâmetros nomeados eviados na rota. Usados para filtro, paginação. Ex: http://localhost:3333/users?aluno=Ana
 * Route params: parâmetros utilizados para identificar recuros (ex: /users/1 - no código vai estar /users/:id, por ex.)
 * Request Body: corpo da rwquisição, utilizado para criar ou alterar recurso
 * const params = request.query; // acessa todos os parâmetro - query
 * const params = request.params; //acessa os parâmetros (/users/:id) - route
 const body = request.body; // acessa o corpo da requisição. Ex: {"name": "Ana B. Garcia", "idade": 22}, em um post
 * 
 */