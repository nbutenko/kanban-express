const Card = require("./Model");

function cardDelete (req, res) {
    const cardId = req.params.cardId;

    Card.deleteOne({ _id: cardId })
        .exec()
        .then(() => {
            res.status(200).json("Card deleted");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Card not deleted error')
        })
}

module.exports = cardDelete;