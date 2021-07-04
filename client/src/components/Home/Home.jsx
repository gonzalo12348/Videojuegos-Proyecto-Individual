import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { GAME_FOUNDED } from '../../store/actions/getGameFounded'
import './Home.css'

export default function Home(){
    const dispatch = useDispatch()

    function limpiarEstado(){
        dispatch({type:GAME_FOUNDED , payload:''})
    }

    return (
        <div className='container_home'>
            <h1 className='title_home'>VIDEOGAMES APP</h1>
            <Link to='/home'>
                <button className='btn_home' onClick={limpiarEstado}></button>
            </Link>
        </div>
    )
}
