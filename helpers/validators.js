const User = require ("../models/User")


const existUsername = async (usn) => {

    const username = usn.toLowerCase()

    const user = await User.findOne({username})
    if(user){
        throw new Error(`Ya existe un usuario con el nombre de uuario ${username}`  )
    }
    return true
}

module.exports = {
    existUsername
}