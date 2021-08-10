import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { gameFounded } from "../../store/actions/getGameFounded";
import Filtrados from '../Filtrados/Filtrados'
import './BusquedaJuego.css'

export default function BusquedaJuego(){
    const [inputValue , setInputValue] = useState('');
    const dispatch = useDispatch();
    const game = useSelector(state => state.gameFounded)

    function SearchGame(e){
        e.preventDefault();
        dispatch(gameFounded(inputValue));
        console.log(game)
    }    

    return(
        <>
        <div className='contenedor_navbar'>
            <h2 className='title_navbar'>VIDEOGAME APP</h2>
            <form className='form_navbar' onSubmit={(e) => SearchGame(e)}>
                <input className='input' placeholder='Buscar videojuego....' type='text' onChange={(e) =>{setInputValue(e.target.value)}}/>
                <button className='btn_enviar' type='submit'>Buscar</button>
            </form>
            <Filtrados/>
        </div>
        </>
    )
}