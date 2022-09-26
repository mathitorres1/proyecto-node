const db = require("../db/index");

const obtenerUsuarios = async (req, res, next) => {
  try {
    const usuarios = await db.query("select * from usuario");

    return res
      .status(200)
      .json({ data: usuarios.rows, message: "Todos los usuarios" });
  } catch (error) {
    return next(error);
  }
};

const agregar = async (req, res, next) => {
  try {
    const nuevoUsuario = {
      nombre: req.body.nombre,
      email: req.body.email,
    };

    await db.query("insert into usuario (nombre, email) values ($1, $2)", [
      nuevoUsuario.nombre,
      nuevoUsuario.email,
    ]);

    console.log(nuevoUsuario);

    return res.status(201).json({ data: nuevoUsuario, message: "Exito" });
  } catch (error) {
    return next(error);
  }
};

const actualizar = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { nombre, email } = req.body;

    const usuario = db.query("select * from usuario where id = $1", [id]);

    if (!usuario.rowCount) {
      return res
        .status(200)
        .json({ data: [], message: "No existe el usuario" });
    }

    if (nombre) {
      await db.query("udpate usuario set nombre = $1", [nombre]);
    }

    if (email) {
      await db.query("udpate usuario set  email = $1", [email]);
    }

    return res.status(204);
  } catch (error) {
    return next(error);
  }
};

module.exports = { obtenerUsuarios, agregar, actualizar };
