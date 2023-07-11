const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date();
    let day = date.toLocaleDateString("en-US", options);
    
    res.render("list", {kindOfDay: day});
     
});

app.post('/', (req, res) => {
     


app.listen (3000, () => 
   {
    console.log('Server is running on port 3000');
    }
);


