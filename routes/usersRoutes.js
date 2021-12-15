const { Router } = require('express')
const { listUsers, createUser } = require('../controllers/userController')
const { check } = require ('express-validator')

const { existUsername, existEmail } = require("../helpers/validators")
const { validacionCampos } = require('../middlewares/validate_fields')



const router = Router()

router.post('/create', [
    check('username', 'El nombre de usuario es obligatorio').notEmpty(),
    check('username').custom(existUsername),
    check('email', 'El email no es valido').isEmail(),
    check('email').custom(existEmail),
    check('password', 'La contraseña debe tener mas de 6 caracteres').isLength({ min: 6 }),
    validacionCampos
], createUser)

router.get('/list', [], listUsers)



module.exports = router