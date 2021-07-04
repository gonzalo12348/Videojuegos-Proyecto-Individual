import GameFounded from '../GameFounded/GameFounded'
import BusquedaJuego from '../BusquedaJuego/BusquedaJuego.jsx'
import ListGames from '../ListGames/ListGames'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react'
import './RutaPrincipal.css'
import { GAME_FOUNDED } from '../../store/actions/getGameFounded';
import EnumeracionPaginas from '../EnumeracionPaginas/EnumeracionPaginas';


export default function RutaPrincipal(){
    const dispatch = useDispatch()
    const [state, setState] = useState('')
    const gameInput = useSelector(state => state.gameFounded) // juego buscado en el navbar
    
    function cerrarNavbar() {
        setState(false)
        dispatch({type:GAME_FOUNDED, payload:0})
    }

    useEffect(()=>{
        setState(gameInput)
    },[gameInput])
    return(
        <div className='contenedor_rp'>
            {/* NavBar  */}
            <BusquedaJuego />     
            <div className='contenedor_post'>
                <Link path to='/createGame'>
                    <button className='btn_post'>X</button>
                </Link>
            </div>
            { !state.length && <EnumeracionPaginas/>}          
        <div className='btn_cont'>
            {state.length?<button className='btn_atras' onClick={cerrarNavbar}>Atras</button>:undefined}
        </div>
            {/* Mostrar los juegos obtenidos de api/bd o del buscador */}
            {state.length?<GameFounded/>:<ListGames />}
        </div>
    )
}