const express = require("express");

const {
  obtenerUsuarios,
  agregar,
  actualizar,
} = require("../controllers/usuarios");

const router = express.Router();

router.get("/", obtenerUsuarios);
router.post("/", agregar);
router.put("/:id", actualizar);

module.exports = router;
