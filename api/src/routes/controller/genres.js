const fetch = require('node-fetch'); 
const { Gender } = require('../../db');

function getGenres( req, res ){
    console.log('llegue')
    fetch(`https://api.rawg.io/api/genres?key=5ebd334670d34f38b7b03ac1ac26421f`)
        .then(response => response.json())
        .then(genres => {
            genres.results.map(itemGenres => {
                Gender.create({
                    id: itemGenres.id,
                    name: itemGenres.name
                }).then(() => console.log('todo ok'))
                .catch(error => console.log(error))
            })
        })
    Gender.findAll()
        .then(generos => res.json(generos))
}



module.exports = getGenres;