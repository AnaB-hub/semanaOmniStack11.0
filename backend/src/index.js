const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // passa o caminho relativo, para o node não pensar que é um pacote e não um arq

const app = express();

app.use(cors()); // em prod: app.use(cors({ origin: 'http://meuapp.com }))
//informa ao express que estaremos utilizando JSON
app.use(express.json()); //essa linha deve vir antes das rotas
app.use(routes);

app.listen(3333);