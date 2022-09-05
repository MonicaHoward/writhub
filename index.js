const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error')

const PORT = 8088;

app.use(cors());
app.use(bodyParser.json());

// app.use(function(req, res, next){
//     let err = new Error("Page Doesn't Exist");
//     err.status = 404;
//     next(err);
// })

app.get('/', (req, res) => {
    res.send("Home")
})

app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Server listening on ${PORT}`);
})
