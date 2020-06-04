const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:admin@animaldb-6lduw.mongodb.net/animalDB?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options).catch(error => console.log(error));
mongoose.connection.on('error', error => console.log(error));
