import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { postGamesNextt } from "../../store/actions/postGamesNext.js"
// import {renderizar} from './EnumeracionPaginasControllers.js'
import './EnumeracionPaginas.css'


export default function EnumeracionPaginas() {
    const [numeroMaximo, setNumeroMaximo] = useState(10)
    const dispatch = useDispatch()
    const gamesNext = useSelector(state=> state.gamesNext)
    const indicePagina = useSelector(state=> state.indicePagina)
    const [indicePaginaAux, setIndicePaginaAux] = useState(indicePagina)
    //Boton de siguiente
    function clickNext() {
        setNumeroMaximo(numeroMaximo + 1)
        dispatch(postGamesNextt({numero: indicePaginaAux + 1 }))
        dispatch({type:'INDICE_PAGINA', payload: indicePaginaAux + 1})
        setIndicePaginaAux(indicePaginaAux + 1)
    }
    //boton del numero
    function clickNumero(numero) {
        dispatch({type:'INDICE_PAGINA', payload: numero})
        return dispatch(postGamesNextt({numero: numero}))
    }
    
    //Renderizado de numeros de botones paginados
    function renderizar(numeroMaximo) {
        var array = []
        for(let i = numeroMaximo - 9; i <= numeroMaximo; i++) {
            array.push(
            <button onClick={()=>clickNumero(i)} className={i==indicePagina ? 'btn_activado':'btn_numero' }>
                {i}
            </button>
            )
        }
        return array.map(item =>item)
    }

    //boton de anterior
    function clickPrevious(){
        numeroMaximo != 10 && setNumeroMaximo(numeroMaximo - 1)
        if(indicePagina != 1) {
            dispatch(postGamesNextt({numero: indicePaginaAux - 1 }))
            dispatch({type:'INDICE_PAGINA', payload: indicePaginaAux - 1})
            setIndicePaginaAux(indicePaginaAux - 1)
        }
        
    }

    useEffect(()=> {
        console.log('este es el indicePagina', indicePagina);
        console.log('este es el indicepaginaaxu', indicePaginaAux);
        setIndicePaginaAux(indicePagina);
    },[indicePagina])
    useEffect(()=>{
        console.log('este es el games next àputrokadsa',gamesNext);
    },[gamesNext])
    return (
        <>
        <h1 className='title_listg'>Lista de juegos</h1>
        <div className='contenedor_numero'>
            <button className='btn_sig_atras' onClick={clickPrevious}>ANTERIOR</button>
            <div className='contenedor_btn_numero'>
            {
                renderizar(numeroMaximo)
            }
            </div>
            <button className='btn_sig_atras' onClick={clickNext}>SIGUIENTE</button>
        </div>
        </>
    )
}