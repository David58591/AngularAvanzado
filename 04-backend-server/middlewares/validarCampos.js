const { response } = require("express");
const { validationResult } = require("express-validator");

const validarCampos = (req, res = response, next) => {
  const myValidationResult = validationResult.withDefaults({
    formatter: (error) => {
      return {
        valid: !error.value,
      };
    },
  });
  const errores = myValidationResult(req).array();
  if (!errores) {
    return res.status(400).json({
      ok: true,
      msg: "Campos no válidos"
    });
  }

  next();
};

module.exports = {
  validarCampos,
};
