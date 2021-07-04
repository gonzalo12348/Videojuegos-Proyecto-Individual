const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const  Videogames = require('./videogames.js')
const  Videogame = require('./videogame.js')
const Genres = require('./genres.js')
const getGamesCreated = require('./controller/getGamesCreated.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', Videogames );
router.use('/videogame', Videogame );
router.use('/genres', Genres );
router.use('/gamesCreated', getGamesCreated)

module.exports = router;
