const cardRouter = require("../modules/card/Routes");

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.use("/card", cardRouter);
}

module.exports = routes;
