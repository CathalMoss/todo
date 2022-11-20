const express = require('express');
const bodyParser= require('body-parser');

const api = express();
//messaged received in terminal from localhost
// api.use((req, res, next) => {
//     console.log('H1llo');
//     next();
// });

//directoryName, full path to this script
api.use(express.static(__dirname + '/public'));
//parse data that you get and add it to request body
api.use(bodyParser.json());


//connection for api
api.listen(3000, () => {
    console.log('API up and running!');
});

//displayed on localhost
// api.get('/', (req, res,) => {
//     //console.log(req);
//     res.send('Hello World!');
// });

//have to send a response for it to work
api.post('/add', (req, res) => {
    console.log(req.body);
    res.send('It works!');
});

//https://app.getpostman.com/join-team?invite_code=6e97d2a7267ccad1ce1f8a3f5bf3b970