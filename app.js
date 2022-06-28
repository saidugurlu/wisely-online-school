import express from 'express';

 
const app = express();
const port = 3031;
 
app.get('/', (req, res) => {
    res.send("<h1>test</h1>");
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});