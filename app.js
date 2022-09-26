const express = require("express");

const app = express();
const usuariosRoute = require("./src/routes/usuarios");

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/usuarios", usuariosRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
