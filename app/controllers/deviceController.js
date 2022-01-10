const { StatusCodes } = require('http-status-codes');
const deviceService = require('../services/deviceService');

exports.getDeviceList = async (req, res, next) => {
    try {
        const deviceDto = await deviceService.getAll();
        res.json({ data: deviceDto, code: "SUCCESS", timestamp: Date.now() }).status(StatusCodes.OK);
    } catch (error) {
        res.json({ error: error.message, code: error.__proto__.name, timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.insert = async (req, res, next) => {
    try {
        const bool = await deviceService.insert(req.body);
        res.json({ data: bool, code: "SUCCESS", timestamp: Date.now() }).status(StatusCodes.CREATED);
    } catch (error) {
        res.json({ error: error.message, code: error.__proto__.name, timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.update = async (req, res, next) => {
    try {
        const bool = await deviceService.update(req.body);
        res.json({ data: bool, code: "SUCCESS", timestamp: Date.now() }).status(StatusCodes.CREATED);
    } catch (error) {
        res.json({ error: error.message, code: error.__proto__.name, timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.delete = async (req, res, next) => {
    try {
        const bool = await deviceService.delete(req.params.id);
        res.json({data: bool, code: "SUCCESS", timestamp: Date.now()}).status(StatusCodes.CREATED);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}