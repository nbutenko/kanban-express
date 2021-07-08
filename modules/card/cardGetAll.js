const Card = require("./Model");
const {cloudinary} = require("../../utils/cloudinary")

function cardGetAll (req, res) {
    Card.find()
        .exec()
        .then((result) => {
            result.map(card => {
                //TODO: not working
                let fileStr = card.file;
                cloudinary.uploader.upload(fileStr, (err, res) => {
                    card.test = res;
                });
            })
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Get all cards error');
        })
}

module.exports = cardGetAll;