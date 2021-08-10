const { Videogame, Gender } = require('../../db');
const { Op } = require("sequelize");
const axios = require('axios')
// instalamos npm i node-fetch para usar fetch
const fetch = require('node-fetch');
const {
    API_KEY
  } = process.env;


function postGames(req, res) {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${req.body.numero}`)
    .then(response => response.json())
    .then(data =>{
        array = [];
        data.results.map(( game , index )=>{
            if(index < 15){
                generos = [];
                generos.push(game.genres.map(genero => genero.name));
                array.push({
                    img: game.background_image,
                    name: game.name,
                    gender: generos.flat(),
                    rating: game.rating,
                    id: game.id
                })
            }    
        })
        res.json(array)
    })
}


module.exports = postGames;