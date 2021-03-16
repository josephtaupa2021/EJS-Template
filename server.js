var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.get('/', function (req, res) {

    let data = [
        {
            name: "burt lannister",
            age: 56,
            hobbies: ['reading', 'polo']
        },
        {
            name: "tobe nwige",
            age: 27,
            hobbies: ['writing', 'pressing flowers']
        },
        {
            name: "miguel atwood",
            age: undefined,
            hobbies: ['music', 'mediation']
        },
        {
            name: "hieu ngyen",
            age: 33,
            hobbies: undefined
        },
        {
            name: undefined,
            age: undefined,
            hobbies: undefined
        }
    ]
    res.render('pages/index', {
        data: data
    });
});

app.listen(8080);
console.log('Listening at Port 8080');
