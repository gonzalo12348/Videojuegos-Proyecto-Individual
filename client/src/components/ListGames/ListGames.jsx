import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {get15games, get15gamesNext} from '../../store/actions/getGamesActions';
import { getGamesCreated} from '../../store/actions/getGamesCreated'
import './styles/ListGames.css';
import { renderizarJuegos } from './controller/index'


export default function ListGames(){
    //Estados globales
    const gamesNext = useSelector(state=> state.gamesNext) 
    const games = useSelector(state => state.games) //15 primeros juegos
    const generofiltrado = useSelector(state=> state.generofiltrado)
    const orden = useSelector(state => state.orden)
    const ascenOdescen = useSelector(state => state.ascenOdescen)
    const gamesCreated = useSelector(state => state.gamesCreated)
    const indicePagina = useSelector(state => state.indicePagina)
    const dispatch = useDispatch()
    
    function mostrarPorOrden(){
        const gamesAll = games.concat(gamesNext)
        return renderizarJuegos(gamesAll, generofiltrado , orden , ascenOdescen, gamesCreated)
    }

    useEffect( async()=> {
        await dispatch(getGamesCreated())
        await dispatch(get15games());
    }, []);

    return (
        <>
        <div className='container'>
        {indicePagina == 1 ? renderizarJuegos(games, generofiltrado , orden , ascenOdescen , gamesCreated): renderizarJuegos(gamesNext, generofiltrado , orden , ascenOdescen)}
        </div>
        </>
    )
}

