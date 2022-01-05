const { StatusCodes } = require('http-status-codes');
const deviceService = require('../services/deviceService');

exports.getAll = (req, res, next) => {
    try {
        const deviceDto = deviceService.getAll();
        res.json({ data: deviceDto, code: "SUCCESS", timestamp: Date.now() }).status(StatusCodes.OK);
    } catch (error) {
        res.json({ error: error.message, code: error.__proto__.name, timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}