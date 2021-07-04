const { Router } = require('express');
const Genres = require('./controller/genres')

const router = Router();


// si hay un query params o no la funcion getGames tiene control para dichos casos
router.get('/', Genres );

module.exports = router;
