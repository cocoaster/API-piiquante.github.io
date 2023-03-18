const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const saucesRoutes = require("./routes/sauces");
const usersRoutes = require("./routes/users");

const app = express();

require("dotenv").config();

const morgan = require("morgan");

app.use(express.json());
app.use(cors());

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const user = mongoose.model("User", userSchema);

//

mongoose
  .connect(
    "mongodb+srv://coco:pIt5Yd3dzH4qYctF@fullstack-mern.nihccbx.mongodb.net/apiPiiquante?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", usersRoutes);

module.exports = app;
