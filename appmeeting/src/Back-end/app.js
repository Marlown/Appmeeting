const express = require('express');

const hostname = "0.0.0.0";
const port = 3000;

const server = express()

const cors = require('cors');
server.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinodepmn');

server.use(express.urlencoded());
server.use(express.json());

// Routes
const postRoute = require('../api/routes/postRoute.js');
server.use('/posts', postRoute);

const commentRoute = require('../api/routes/commentRoute');
server.use('/', commentRoute);

server.listen(port, hostname);