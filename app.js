import express from 'express';

 
const app = express();
const port = 3031;


// Template Engine
app.set('view engine', 'ejs');


//Middlewares
app.use(express.static("public"));
 
app.get('/', (req, res) => {
    res.status(200).send("<h1>test</h1>");
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});