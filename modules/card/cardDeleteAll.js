const Card = require("./Model");

function cardDeleteAll(req, res) {
    Card.deleteMany()
        .exec()
        .then(() => {
            res.status(200).json('All cards deleted');
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Delete all cards error');
        })
}

module.exports = cardDeleteAll;