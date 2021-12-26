const express = require("express")
const app = express();
const helmet = require("helmet");

app.use(helmet());
app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log("Server Running" + " " + process.env.APP_PORT)
})