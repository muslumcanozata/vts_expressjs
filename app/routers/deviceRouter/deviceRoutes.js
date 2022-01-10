const express = require("express")
const router = express.Router();
const deviceController = require('../../controllers/deviceController');
const { GET_DEVICE_LIST, POST_DEVICE_ADD, PATCH_DEVICE_UPDATE, DELETE_DEVICE } = require('../constants/deviceRouterConstants');

router.get(`${GET_DEVICE_LIST}`, deviceController.getDeviceList);
router.post(`${POST_DEVICE_ADD}`, deviceController.insert);
router.patch(`${PATCH_DEVICE_UPDATE}`, deviceController.update);
router.delete(`${DELETE_DEVICE}`, deviceController.delete);



module.exports = {
    deviceRouter: router
}