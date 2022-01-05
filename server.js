const express = require("express");
const app = express();
const router = express.Router();
const helmet = require("helmet");
const routes = require('./app/routers/routes');
const config = require('./app/configs/config');
const db = require('./app/db/db');
const { DEVICE_ROUTE, } = require('./app/routers/constants/routerConstants');

config.serverConfig.installServerConfigs();

app.use(helmet());
app.use(express.json());
app.use(`${process.env.APP_PREFIX}${DEVICE_ROUTE}`, routes.deviceRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server Running " + process.env.APP_PORT);
});