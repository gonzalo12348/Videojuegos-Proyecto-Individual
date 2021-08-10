import {Link} from 'react-router-dom'

// renderiza los 15 juegos principales y si obtiene un generofiltrado filtra los juegos con ese genero
export function renderizarJuegos(games , generofiltrado, orden , ascenOdescen,gamesCreated){
    console.log('estos son los juegos creados para hacer el concat: ' , gamesCreated)
    //Unimos los 15juegos con los de la base de datos (gamesCreated)
    gamesCreated && (games = games.concat(gamesCreated))
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
        if(generofiltrado.length > 0){
            if(game.genders){
                game.gender = game.genders.map(item => item.name);
            }
            return (game.gender.find(item => item == generofiltrado) && 
            <Link path to={`/videogame/${game.id}`} className='game'>
                <div className='cont_info_item'>
                    <h3 className='titleGame'>{game.name}</h3>
                    <img src={game.img} className='img' />
                    <ul className='list'>
                        <h4>GENERO:</h4>
                        {
                        game.genders?game.genders.map((genero, index )=> <li key={index}>{genero.name}</li>):game.gender.map((genero, index )=> <li key={index}>{genero}</li>)
                        }
                    </ul>
                </div>
            </Link>
                )
        } else{
            return (
            <Link path to={`/videogame/${game.id}`} className='game'>
                <div className='cont_info_item'>
                    <h3 className='titleGame'>{game.name}</h3>
                    <img src={game.img} className='img' />
                    <ul className='list'>
                        <h4>GENERO:</h4>
                        {
                        game.genders?game.genders.map((genero, index )=> <li key={index}>{genero.name}</li>):game.gender.map((genero, index )=> <li key={index}>{genero}</li>)
                        }
                    </ul>
                </div>
            </Link>
                )
        }
        
        }
    )
}
