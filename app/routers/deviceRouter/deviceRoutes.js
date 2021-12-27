const express = require("express")
const router = express.Router();
const deviceController = require('../../controllers/deviceController/deviceController');
const { GET_DEVICE_LIST } = require('../constants/deviceRouterConstants');

router.get(`${GET_DEVICE_LIST}`, deviceController.getAll);

module.exports = {
    deviceRouter: router
}