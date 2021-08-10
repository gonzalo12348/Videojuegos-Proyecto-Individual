const fetch = require('node-fetch');
const { Videogame, Gender } = require('../../db');
const {
    API_KEY
  } = process.env;


function getOneGame(req, res) {
    var id = req.params.id
    if(id[0] == 'D'){
        Videogame.findOne({
            where:{
                id: id
            },
            include: [
                { model: Gender}
            ]
        })
        .then(data =>{
            array = [];
            generos = [];
            generos.push(data.genders.map(genero => genero.name));
            array.push({
                img: data.img,
                name: data.name,
                gender: generos.flat(),
                rating: data.rating,
                released: data.released,
                description: data.description,
                platforms:data.platforms.split(',').filter(item => item.length >0)
            })
            return res.json(array);

        })
    }
    fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    .then(response => response.json())
    .then(data =>{
        if(!data) return res.send('No existe videojuego con el id buscado')
        return data
    })
    .then(data =>{
        array = [];
        generos = [];
        generos.push(data.genres.map(genero => genero.name));
        plataformas = [];
        plataformas.push(data.platforms.map((p) => p.platform.name))
        array.push({
            img: data.background_image,
            name: data.name,
            gender: generos.flat(),
            rating: data.rating,
            released: data.released,
            description: data.description,
            platforms : plataformas.flat()
        })  
        res.json(array)
    })
}
let aux = 0

async function createGame(req, res) {
    aux = aux + 1
    const {name, description, released, rating, platforms, genres, img} = req.body
    //Crea el juego
    const game = await Videogame.create({
        id: 'DB-' + aux,
        name: name,
        description: description,
        released: released,
        rating: rating,
        platforms:platforms,
        img: img
    })
    //Agrega su genero en BD
    for(let i = 0; i< genres.length; i++) {
        let genero = await Gender.findOne({
            where:{
                name: genres[i]+ ''
            }
        })
        game.addGender(genero)
    }

    res.send('ok')
}

module.exports = {
    createGame,
    getOneGame
};