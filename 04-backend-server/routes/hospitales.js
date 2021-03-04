/* ruta: /api/hospitales*/

const {Router} = require('express')
const { check } = require('express-validator');

const {getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital } = require('../controllers/hospitales');
const { validarCampos } = require('../middlewares/validarCampos');

const router  = Router();

 router.get('/',getHospitales);
 router.post('/',
    [
      check('nombre','el nombre del hospital es obligatorio').not().isEmpty(),
      validarCampos
    ]   ,crearHospital);
  router.put('/:id', [],actualizarHospital);

  router.delete('/:id',borrarHospital);

module.exports = router;
