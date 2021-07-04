import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJuegosCreados } from './JuegosCreados'
import {Link} from 'react-router-dom'
import { renderizarJuegos } from '../ListGames/controller/index'
import './JuegosCreados.css'
import { GAME_FOUNDED } from '../../store/actions/getGameFounded'


export default function JuegosCreados() {
    //Estados globales redux
    const generofiltrado = useSelector(state=> state.generofiltrado)
    const orden = useSelector(state => state.orden)
    const ascenOdescen = useSelector(state => state.ascenOdescen)
    const gamesCreated = useSelector(state => state.gamesCreated)
    const dispatch = useDispatch()

    function cerrarNavbar() {
        dispatch({type:GAME_FOUNDED, payload:0})
    }

    useEffect(()=>{
    },[])
    return (
        <>
        <div className='title_listg'>
            <h1 className={'title_juegoCreado'}>Juegos Creados</h1>
        </div>
        <div className='btn_cont'>
            <Link path to='/home'>
                <button onClick={cerrarNavbar} className='btn_atras' >Atras</button>
            </Link>
        </div>
        <div className='container'>
            {
                renderizarJuegos(gamesCreated, generofiltrado , orden , ascenOdescen)
            }
        </div>
        </>
    )
}