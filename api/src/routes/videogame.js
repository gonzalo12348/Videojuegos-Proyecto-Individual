const { Router } = require('express');

const router = Router();
const {getOneGame, createGame} = require('./controller/videogame')

router.get('/:id', getOneGame)
router.post('/', createGame)

module.exports = router;
