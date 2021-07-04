import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../store/actions/getGenres'
import {Link} from 'react-router-dom'
import './Filtrados.css'

export default function Filtrados(){
    const [filtradoSelect, setFiltradoSelect] = useState('')
    const dispatch = useDispatch()
    //Estados Store: filtros
    const generos = useSelector(state => state.genres)
    const filtrado = useSelector(state => state.generofiltrado)
    const FiltradosGenero = useRef(null)
    //Estados Store: ordenamiento
    const Ordenamiento = useRef(null)
    const orden = useSelector(state => state.orden)
    //Estado Store: ascendente o descendente
    const ascenOdescen = useSelector(state => state.ascenOdescen)
    
    //manejo de filtros
    function HandlerFiltradosSelect(e){
        var value = e.target.value
        setFiltradoSelect(value)
    }
    async function submit(){
        FiltradosGenero.current.value !== 'null' && await dispatch({type:'GENERO_FILTRADO', payload:FiltradosGenero.current.value})
    }

    //manejo de ordenamiento
    async function submitOrden() {
        Ordenamiento.current.value !== 'null' && await dispatch({type:'GET_ORDEN', payload: Ordenamiento.current.value})
    }

    //manejo de ascendente o descendente
    function asOdes(){
        if(ascenOdescen == null || ascenOdescen == 'Descendente'){
            return dispatch({type:'SET_ASCEN_DESCEN', payload:'Ascendente'})
        }
        if(ascenOdescen == null || ascenOdescen == 'Descendente'){
            return dispatch({type:'SET_ASCEN_DESCEN', payload:'Ascendente'})
        }
        return dispatch({type:'SET_ASCEN_DESCEN', payload:null})
    }

    useEffect(async()=>{
        await dispatch(getGenres())
    },[])
    useEffect(()=>{
        console.log(orden)
    },[orden])
    return(
        <div className='contenedor_btn'>
                <div className='contenedor_filtrado'>
                    <p>Filtrar por :</p>
                    <select className='filtrado' onClick={HandlerFiltradosSelect}>
                        <option value='null'>Seleccione una opcion:</option>
                        <option value='genero'>Genero</option>
                        <option value='juegosCreados'>Juegos Creados</option>
                    </select>
                    {
                      filtradoSelect == 'juegosCreados' && (
                          <Link  path to='/gameCreated'>
                            <button className='btnGamess'>Filtrar</button>
                          </Link>
                      ) || filtradoSelect == 'genero' && (
                        <>
                        <select className='filtrado'  ref={FiltradosGenero} >
                            <option value='null'>Seleccion Generos:</option>
                            {generos.map(item => (
                                <option value={item.name}>{item.name}</option>
                            ))}
                        </select>
                        <button className='btnGamess' onClick={submit}>Filtrar</button>
                        </>
                        )
                    }
                </div>

                <p>Ordenar por :</p>
                <select className='filtrado' ref={Ordenamiento}>
                    <option value='null'>Seleccione una opcion</option>
                    <option value='Alfabeticamente'>Alfabeticamente</option>
                    <option value='Rating'>Rating</option>
                </select>
                <button className='btnGamess' onClick={submitOrden}>Ordenar</button>
                <button className='btnAscDesc' onClick={asOdes}>Ascendente<br/>Descendente</button>
            </div>
    )
}