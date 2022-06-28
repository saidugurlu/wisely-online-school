import express from 'express';

 
const app = express();



// Template Engine
app.set('view engine', 'ejs');


//Middlewares
app.use(express.static("public"));
 

//Routes
app.get('/', (req, res) => {
    res.status(200).render('index');
});

app.get('/about', (req, res) => {
    res.status(200).render('about');
});


const port = 3031;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});