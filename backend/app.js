const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const saucesRoutes = require("./routes/sauces");
const usersRoutes = require("./routes/users");

const app = express();



const morgan = require("morgan");
const path = require("path");

app.use(express.json());
app.use(cors());
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const user = mongoose.model("User", userSchema);

//
dotenv.config();

const uri = process.env.STRING_URI;

mongoose
  .connect(
    "mongodb+srv://coco:pIt5Yd3dzH4qYctF@fullstack-mern.nihccbx.mongodb.net/apiPiiquante?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", usersRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
