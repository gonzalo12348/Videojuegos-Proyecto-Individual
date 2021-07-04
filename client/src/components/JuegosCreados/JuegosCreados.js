
// description: "aeklhklasv"
// genres: "Indie,Adventure"
// name: "gonzalo"
// platforms: "PC,PS5,,"
// rating: "10.5"
// released: "12/12/1253"

export function getJuegosCreados(games , generofiltrado, orden , ascenOdescen){
    if(orden == 'Alfabeticamente' ){
         games = games.sort((a, b)=>{
            const nameA = a.name
            const nameB = b.name
            if(nameA < nameB) {
                return -1;
            }
            if(nameA > nameB) {
                return 1;
            }
            return 0;  
        })
    }
    if(orden == 'Rating') {
        games = games.sort((a, b)=>{
            return b.rating - a.rating
        })
    }
    if(ascenOdescen !== null){
        games = games.reverse();
    }
    return games.map(game => {
        console.log(generofiltrado)
        if(generofiltrado.length > 0){
            return (game.genres.find(item => item == generofiltrado) && 
        <div className='gamec'>
            <h3>{game.name}</h3>
            <img src={game.img} className='img' />
            <div className='detalles'>
                <div>
                    <h4>GENERO:</h4>
                    {game.genres.map((genero, index )=> <li key={index}>{genero}</li>)}
                </div>
                <div>
                    <h4>Descripcion</h4>
                    <span>{game.description}</span>
                </div>
                <div>
                    <h4>Fecha de lanzamiento</h4>
                    <span>{game.released}</span>
                </div>
                <div>
                    <h4>Rating:</h4>
                    <span>{game.rating}</span>
                </div>
                <div>
                    <h4>Plataformas</h4>
                    {game.platforms.split(',').map((genero, index )=> genero.length?<li key={index}>{genero}</li>:null)}
                </div>
            </div>
        </div>
                )
        } else{
            return (
                    <div className='gamec'>
                        <h3>{game.name}</h3>
                        <img src={game.img} className='img' />
                        <div className='detalles'>
                            <div>
                                <h4>GENERO:</h4>
                                {game.genres.map((genero, index )=> <li key={index}>{genero}</li>)}
                            </div>
                            <div>
                                <h4>Descripcion</h4>
                                <span>{game.description}</span>
                            </div>
                            <div>
                                <h4>Fecha de lanzamiento</h4>
                                <span>{game.released}</span>
                            </div>
                            <div>
                                <h4>Rating:</h4>
                                <span>{game.rating}</span>
                            </div>
                            <div>
                                <h4>Plataformas</h4>
                                {game.platforms.split(',').map((genero, index )=> genero.length?<li key={index}>{genero}</li>:null)}
                            </div>
                        </div>
                    </div>
                )
        }
        
        }
    )
}

