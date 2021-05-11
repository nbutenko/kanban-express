const Column = require("./Model");

function columnCreate(req, res) {
    const newColumn = new Column({
        title: req.body.title,
    });
    newColumn
        .save()
        .then(() => {
            res.status(200).json("Column created");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Column not created");
        })
        .finally(() => {
            console.log("END");
        });
}

module.exports = columnCreate;