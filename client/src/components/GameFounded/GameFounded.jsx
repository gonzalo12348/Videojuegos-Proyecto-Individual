import { useSelector } from "react-redux"
import { renderizarJuegos } from '../ListGames/controller/index'


export default function GameFounded(){
    const gameFounded = useSelector(state => state.gameFounded)
    const generofiltrado = useSelector(state => state.generofiltrado)

    return(
        <div className='container'>
            {
                gameFounded?renderizarJuegos(gameFounded, generofiltrado):null
            }
        </div>
    )
}