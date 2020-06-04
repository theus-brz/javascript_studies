const AnimalRepository = require('../repository/AnimalRepository');

exports.findAll = async (_, res) => {
  const animals = await AnimalRepository.findAll();
  res.json(animals);
}

exports.save = async (req, res) => {
  const animal = await AnimalRepository.save(req.body);
  res.status(201).json(animal);
}
