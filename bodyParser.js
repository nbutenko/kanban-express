function bodyParser(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}

module.exports = bodyParser;

