const { Router } = require('express');
const getCharacters = require("../controllers/charactersController.js");

const router = Router();

router.get("/characters", getCharacters.getCharacters);

module.exports = router;