const { validationResult } = require ('express-validator')



// const existUsernameUpdate = async (req, res, netx) => {

//     const {} = req.params
// }

const validacionCampos = (req, res, next) =>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    next()
}


module.exports = {
    validacionCampos
}