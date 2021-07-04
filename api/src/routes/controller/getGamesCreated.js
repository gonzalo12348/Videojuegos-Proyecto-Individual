const fetch = require('node-fetch'); 
const { Gender, Videogame } = require('../../db');

function getGamesCreated( req, res ){
    Videogame.findAll({
        include: [
            { model: Gender}
        ]
    })
    .then(data => res.json(data))
}

module.exports = getGamesCreated;