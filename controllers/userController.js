const { response } = require('express')
const User = require('../models/User')
const bcryptjs = require('bcryptjs')



const createUser = async (req, res = response) => {


    const { email, password } = req.body

    const username = req.body.username.toLowerCase()

    const user = await new User({ username, email, password })


    //encriptar contraseña
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt)

    await user.save()

    res.json({ user })
}






const listUsers = async (req, res = response) => {

    console.log(req)

    res.json({ nombre: 'juan' })

}


module.exports = {
    listUsers, createUser
}