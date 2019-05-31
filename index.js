const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


const message = [] ;

app.use("/message"), function (request, response) {
    request.body.timestamp = Date
}
