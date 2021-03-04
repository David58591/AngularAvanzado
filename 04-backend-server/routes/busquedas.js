/* ruta api/buscar/:busqueda*/
const {busquedasTotales, documentosColeccion} = require('../controllers/busquedas')
const {Router} = require('express')
const router = Router()

router.get("/:busqueda",busquedasTotales)
router.get("/coleccion/:tabla/:busqueda",documentosColeccion)

module.exports = router;