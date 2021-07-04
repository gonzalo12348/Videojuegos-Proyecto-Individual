const { Router } = require('express');
// instalamos npm i node-fetch para usar fetch papu
const router = Router();
const getGames15 = require('./controller/videogames');
const {getNextGames15, getPreviousGames15} = require('./controller/getNextPrevious');
const postGames = require('./controller/postGamesNext');

// si hay un query params o no la funcion getGames tiene control para dichos casos
router.post('/', postGames) 
router.get('/', getGames15 );
router.get('/next', getNextGames15)
router.get('/previous', getPreviousGames15)

module.exports = router;
