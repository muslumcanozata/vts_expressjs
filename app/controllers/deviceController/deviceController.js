const { StatusCodes } = require('http-status-codes')

exports.getAll = (req, res, next) => {
    return res.send("OK");
    /*try {
        const result = "RESULT";
        return res.send(result).status(StatusCodes.OK)
        //res.json(result).status(StatusCodes.OK)
    } catch (error) {
        return res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }*/
}