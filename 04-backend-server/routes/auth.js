/*  api/login */
const { Router} = require('express');
const { check } = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();

router.post('/',
    [
        check('email','El Email es obligatorio').isEmail(),
        check('password','la contraseña es obligatoria').not().isEmpty(),
        validarCampos
    ],login
    )
router.post('/google',
    [
        check('email','El Email es obligatorio').isEmail(),
        check('password','la contraseña es obligatoria').not().isEmpty(),
        validarCampos
    ],googleSignIn
    )
module.exports = router;
