const cardRouter = require("../modules/card/Routes");
const columnRouter = require("../modules/column/Routes");

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello world!')
    })
    app.use("/card", cardRouter);

    app.use("/column", columnRouter);
}

module.exports = routes;
