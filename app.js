// Assignment 1

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h2>Hello, My Server!</h2>");
});
app.listen(port, () => console.log(`listening on port ${port}!`));


// Assignment 2

app.get('/getData', function(req, res) {
    if(req.query.number === undefined){
        res.send("<h2>Lack of Parameter</h2>");
    }
    const number = parseInt(req.query.number);

    if (isNaN(number)){
        res.send("<h2>Wrong Parameter</h2>");
    } else if (Number.isInteger(number)){
        let answer = 0;
        for (i = 0; i <= number; i++){
            answer += i;
        };
        res.send("<h2>" + answer + "</h2>");
    } 
});

// Assignment 3

app.get('/sum.html', (req, res) => {
    res.sendFile('./sum.html', {root: __dirname});
});

app.use('/public', express.static('app'));
