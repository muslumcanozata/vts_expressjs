const express = require("express")
const router = express.Router();
const deviceController = require('../../controllers/deviceController');
const { GET_DEVICE_LIST, POST_DEVICE_ADD, PATCH_DEVICE_UPDATE, DELETE_DEVICE } = require('../constants/deviceRouterConstants');

router.get(`${GET_DEVICE_LIST}`, deviceController.getAll);

module.exports = {
    deviceRouter: router
}