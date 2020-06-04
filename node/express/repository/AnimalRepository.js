const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

exports.findAll = () => {
  return Animal.find().exec();
}

exports.save = (newAnimal) => {
  return new Animal(newAnimal).save();
}
