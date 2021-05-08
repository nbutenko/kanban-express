const cardRouter = require("../card/Routes");

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hell00o World!')
    })

    app.use("/card", cardRouter);
}

module.exports = routes;
