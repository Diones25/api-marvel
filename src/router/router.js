const { Router } = require('express');
const getCharacters = require("../controllers/marvelApiController.js");

const router = Router();

router.get("/characters", getCharacters.getCharacters);
router.get("/comics", getCharacters.getComics);
router.get("/creators", getCharacters.getCreators);
router.get("/events", getCharacters.getEventos);
router.get("/series", getCharacters.getSeries);
router.get("/stories", getCharacters.getStories);



module.exports = router;