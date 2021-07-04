// instalamos npm i node-fetch para usar fetch papu
const fetch = require('node-fetch');
let contador = 1; 
function getNextGames15(req, res) {
    if(req.query.name) return getGames15ByName(req,res)
    contador++
    fetch(`https://api.rawg.io/api/games?key=5ebd334670d34f38b7b03ac1ac26421f&page=${contador}`)
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

function getPreviousGames15(req, res) {
    contador--
    if(req.query.name) return getGames15ByName(req,res)
    fetch(`https://api.rawg.io/api/games?key=5ebd334670d34f38b7b03ac1ac26421f&page=${contador}`)
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

module.exports = {
    getPreviousGames15,
    getNextGames15
};