const express = require('express');
const router = express.Router();
const AnimalController = require('../controllers/AnimalController');
const { handleError } = require('../middleware/handleError');

router.get('/animals', handleError(AnimalController.findAll));
router.post('/animals', handleError(AnimalController.save));

module.exports = router;
