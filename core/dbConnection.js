const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://nbutenko:vedaxu123@kanban.lu5rf.mongodb.net/kanban?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
};

function dbConnection() {
    mongoose.connect(connectionString, options)
        .then(() => console.log('Mongo connection OK'))
        .catch(err => console.log(err))
}

module.exports = dbConnection;