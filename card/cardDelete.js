const card = require("./Model");

function cardDelete (req, res) {
    const cardId = req.params.cardId;

    card.deleteOne({ _id: cardId})
        .exec()
        .then((result) => {
            res.status(200).json("Card deleted");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Card not deleted error')
        })
}

module.exports = cardDelete;