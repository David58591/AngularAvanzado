/* ruta: /api/medicos*/

const {Router} = require('express')
const {check} = require('express-validator')
const {getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico } = require('../controllers/medicos')

const router  = Router();

 router.get('/',getMedicos);
 router.post('/',
    [
      check('nombre','El nombre del médico es obligatorio').not().isEmpty(),
      check('rol','El rol es obligatorio').not().isEmpty(),
      check('hospital','Hospital es obligatorio').isAlphanumeric()
    ]   ,
    crearMedico);
  router.put('/:id', [],actualizarMedico);

  router.delete('/:id',borrarMedico);

module.exports = router;
