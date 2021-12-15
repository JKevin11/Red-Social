const express = require('express')
const cors = require('cors')
const {dbConnection} = require('../database/config')


class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        //INICIAR CONEXION BD

        this.conectarBD()


        this.middlewares()

        this.routes()
    }


    async conectarBD(){
        await dbConnection()
    }


    middlewares() {
        //cors
        this.app.use(cors())

        //lectura y parseo del body a json
        this.app.use(express.json())
    }


    routes() {
        //prueba
        this.app.use('/api/v1/usuarios', require('../routes/usersRoutes'))
    }


    listen() {
        this.app.listen(process.env.PORT, () => { console.log('Corriendo en el puerto' + process.env.PORT) })
    }
}


module.exports = Server