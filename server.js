const express = require('express');
const app = express();
const fs = require('fs');
const port = 5000;

app.use('/images', express.static('images'));
app.use('/javascript', express.static('javascript'));
app.use('/css', express.static('css'));

app.get('/', (req, res) => {
    fs.readFile('./mainPage.html', (err, data) => {
        if (err) {
            throw(err);
        }
        res.end(data);
    });
});

app.get('/loginPage', (req, res) => {
    fs.readFile('./loginPage.html', (err, data) => {
        if (err) {
            throw(err);
        }
        res.end(data);
    });
})

app.listen(port, () => console.log(`\n Factory Mashup server is running on ${port}. \n`));