const User = require("./Model");

function userDeleteById(req, res){
    const userId = req.params.userId;

    User.deleteOne({ _id: userId })
        .exec()
        .then(() => {
            res.status(200).json("User deleted");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("User not deleted error")
        })
}

module.exports = userDeleteById;