const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const server = require('./listen.js')

const url = 'mongodb://localhost:27017';
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());



MongoClient.connect(url, {poolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    if (err) {return console.log(err)}
        const db = client.db('mydb')

        require('./routes/add.js')(db, app);
        require('./routes/read.js')(db, app);
        require('./routes/validid.js')(db, app);
        require('./routes/remove.js')(db, app, ObjectID);
        require('./routes/update.js')(db, app, ObjectID);
        require('./routes/getitem.js')(db, app, ObjectID);

    server.listen(app, PORT);
});