const Column = require("./Model");

function columnGetAll (req, res) {
    Column.find()
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Get all columns error');
        })
}

module.exports = columnGetAll;