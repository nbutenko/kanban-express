const bodyParserPackage = require('body-parser')

function bodyParser(app) {
    // parse application/x-www-form-urlencoded
    app.use(bodyParserPackage.urlencoded({ extended: false }));
    // [arse application/json
    app.use(bodyParserPackage.json());
}

module.exports = bodyParser;

