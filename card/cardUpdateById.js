const Card = require("./Model");

function cardUpdateById (req, res) {
    const newCard = req.body;
    const cardId = req.params.cardId;

    Card.updateOne({ _id: cardId}, newCard)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Update card error')
        })
}

module.exports = cardUpdateById;