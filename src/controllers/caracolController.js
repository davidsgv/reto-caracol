const caracol = require("../services/caracol")

module.exports = async function caracolController(req, res){
    try{
        n = parseInt(req.params.n)

        let resultado = caracol(n)
        res.status(200).json({
            message: "ok",
            resultado
        })
    }catch (error){
        res.status(500).json({
            error: `error en la aplicacion: ${error}`
        })
    }
}