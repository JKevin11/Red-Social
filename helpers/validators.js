const User = require ("../models/User")


const existUsername = async (usn) => {

    const username = usn.toLowerCase()

    const user = await User.findOne({username})
    if(user){
        throw new Error(`Ya existe un usuario con el nombre de usario ${username}`  )
    }
    return true
}

const existEmail = async (e = '') => {

    

    const email = e.toLowerCase()

    const user = await User.findOne({ email })
    if(user){
        console.log('holaaaaaaaaaaaaaaaaaaaaaa')
        throw new Error(`Ya existe un usuario con el email ${email}` )
    }
    return true
}

module.exports = {
    existUsername, existEmail
}