import express from "express";
import pageRoute from '../routes/pageRoute'; 

const app = express();

// Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

//Routes
app.use("/", pageRoute);


const port = 3031;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
