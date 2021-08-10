const { Videogame, Gender } = require('../../db');
const { Op } = require("sequelize");
const axios = require('axios')
// instalamos npm i node-fetch para usar fetch
const fetch = require('node-fetch');
const {
    API_KEY
  } = process.env;


function getGames15(req, res) {
    if(req.query.name) return getGames15ByName(req,res)
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`)
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

async function getGames15ByName(req, res) {
    var arrayGames = [];
    const juegosEncontrados = await Videogame.findAll({
        where:{
            name: {
                [Op.substring]: req.query.name
            }
        },
        include: [
            { model: Gender}
        ]
    })

    juegosEncontrados.map(juego => {
        arrayGames.push({
            img: juego.img,
            name: juego.name,
            gender: juego.genders.map(item=>item.name).flat(),
            rating: juego.rating,
            id: juego.id
        })
    })
    const juegosApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${req.query.name}`)
    
    juegosApi.data.results.map((game, index)=>{
        if(index < 15){
            generos = [];
            generos.push(game.genres.map(genero=> genero.name));
            arrayGames.push({
                img: game.background_image,
                name: game.name,
                gender: generos.flat(),
                rating: game.rating,
                id: game.id
            })
        }
    })
    res.json(arrayGames);
}

module.exports = getGames15;