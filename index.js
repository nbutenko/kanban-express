const express = require('express');
const routes = require('./routes');
const bodyParser = require('./bodyParser')

const app = express();
const PORT = process.env.PORT || 3000;

// body parser
// bodyParser(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})