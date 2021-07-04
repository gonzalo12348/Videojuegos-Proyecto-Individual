import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { gameDetails } from '../../store/actions/getGameDetails.js'
import {game} from './GameController.js'
import {Link} from 'react-router-dom'
import './Game-Styles.css'
export default function GameDetails() {
    const {gameId} = useParams()
    const dispatch = useDispatch()
    const gameD = useSelector(state => state.gameDetails)

    useEffect(async ()=>{
        if(gameId > 0 || gameId[0] == 'D'){
            await dispatch(gameDetails(gameId))
            console.log('este es el juego',gameD)
        }
    },[])
    return (
        <>
        <br/>
        <Link path to='/home' >
            <button className='btn_atras_detailts'>Atras</button>
        </Link>
        {
            gameD[0]?game(gameD[0]):null
        }
        </>
    )
}
