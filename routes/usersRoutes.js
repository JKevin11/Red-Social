const { Router } = require('express')
const { listUsers, createUser } = require('../controllers/userController')
const { check } = require ('express-validator')

const { existUsername } = require("../helpers/validators")
const { validacionCampos } = require('../middlewares/validate_fields')



const router = Router()

router.post('/create', [
    check('username', 'El nombre de usuario es obligatorio').notEmpty(),
    check('username').custom(existUsername),
    validacionCampos
], createUser)

router.get('/list', [], listUsers)



module.exports = router