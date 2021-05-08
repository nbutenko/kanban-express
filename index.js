const express = require('express');
const cors = require("./core/cors");
const routes = require('./core/routes');
const bodyParser = require('./core/bodyParser')
const dbConnection = require("./core/dbConnection");

const app = express();
const PORT = process.env.PORT || 3000;

dbConnection();
bodyParser(app);
cors(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})