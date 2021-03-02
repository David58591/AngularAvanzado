/* /api/usuarios */
const {getUsuarios, createUsuarios, actualizarUsuario, borrarUsuario} = require('../controllers/usuarios');
const {Router} = require('express')
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');

const router  = Router();

 router.get('/',getUsuarios);
 router.post('/',
    [  
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('email','NO tiene formato de email').isEmail(),
        check('password','La contraeña es obligatoria').not().isEmpty(),
        validarCampos
    ]
    ,createUsuarios);
  router.put('/:id', [  
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('email','NO tiene formato de email').isEmail(),
    check('role','El rol es obligatorio').not().isEmpty(),
    validarCampos
],actualizarUsuario);

  router.delete('/:id',borrarUsuario);

module.exports = router;
