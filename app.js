const express = require("express");
const mongoose = require("mongoose");
const pageRoute = require("./routes/pageRoute");

const app = express();

// Connect DB
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost/wisely-online-school");
}

// Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//Routes
app.use("/", pageRoute);

const port = 3056;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
