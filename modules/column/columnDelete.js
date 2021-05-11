const Column = require("./Model");

function columnDelete (req, res) {
    const columnId = req.params.columnId;

    Column.deleteOne({ _id: columnId})
        .exec()
        .then(() => {
            res.status(200).json("Column deleted");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Column not deleted error')
        })
}

module.exports = columnDelete;