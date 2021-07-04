import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGamesCreated } from '../../store/actions/getGamesCreated'
import {renderGamesCreated} from './JuegosCreadosControllers.js'
import './JuegosCreados.css'

export default function JuegosCreadosBD() {
    //Estados globales (redux)
    const gamesCreated = useSelector(state => state.gamesCreated)
    const generofiltrado = useSelector(state => state.generofiltrado)
    const orden = useSelector(state => state.orden)
    const ascenOdescen = useSelector(state => state.ascenOdescen)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGamesCreated())
    },[])


    return (
        <>
            <div className='container'>
                {renderGamesCreated(gamesCreated,generofiltrado,orden,ascenOdescen)}
            </div>
        </>
    )
}
