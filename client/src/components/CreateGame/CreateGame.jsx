import './CreateGame.css'
import { useEffect, useRef, useState } from 'react'
import { getGenres } from '../../store/actions/getGenres'
import { useDispatch, useSelector } from 'react-redux'
import {mostrarGeneros } from './CreateGameController'
import { postGame } from '../../store/actions/postGame'
import {Link} from 'react-router-dom'

export default function CreateGame(){
    const dispatch = useDispatch();
    const generos = useSelector(state=> state.genres)
    const formulario = useRef(null)
    const Genr = useRef(null)
    //Estado local
    const [activador, setActivador] = useState('')
    //Estado redux
    const gameCreado = useSelector(state => state.gameCreado)
    // Ref de inputs
    const input_name = useRef(null)
    const input_description = useRef(null)
    const input_rating = useRef(null)
    const input_released = useRef(null)
    const input_img = useRef(null)

    const input_platforms1 = useRef(null)
    const input_platforms2 = useRef(null)
    const input_platforms3 = useRef(null)
    const input_platforms4 = useRef(null)
        
    function Submit(e) {
        console.log('estoy en submitttttttttttttttttttttt');
        e.preventDefault();
        var form = [];
        // console.log('estoooooooo', formulario.current[0]);
        if(formulario.current == null)return alert('Error');
        for(let i = 0; i <= 18;i++){
            formulario.current[i].value!='on' && form.push(formulario.current[i].value)
        }
        var array = [input_platforms1.current.value,input_platforms2.current.value,input_platforms3.current.value,input_platforms4.current.value]
        var juegoPorCrear = {
            name:input_name.current.value,
            description:input_description.current.value,
            released:input_released.current.value,
            rating:input_rating.current.value,
            platforms:array + '',
            genres:form,
            img:input_img.current.value
        }
        var verificador = true;
        // console.log('holaaaaaaaaaaaaaaaaaaaaaauuuua',juegoPorCrear);
        for(const propiedad in juegoPorCrear) {
            !juegoPorCrear[propiedad].length && ( verificador = false)
        }
        console.log(verificador);
        verificador && dispatch(postGame({
            name:input_name.current.value,
            description:input_description.current.value,
            released:input_released.current.value,
            rating:input_rating.current.value,
            platforms:array + '',
            genres:form,
            img:input_img.current.value
        }))
        return alert('Videojuego Creado Exitosamente !!')
    }

    function btnAct(activador){
        if(activador === 'true'){
            return (
                <form ref={formulario} className='genres'>
                    {   mostrarGeneros(generos)}
                </form>
            )  
        }else if (activador === 'false'){
            return(
                <div></div>
            )
        }

    }
    //boton ir a home
    function cerrarNavbar() {
        dispatch({type:'GAME_FOUNDED', payload:0})
    }

    useEffect(()=>{
        dispatch(getGenres())
    },[])

    return(
    <>
            <div className='btn_cont_form'>
                <Link path to='/home'>
                    <button onClick={cerrarNavbar} className='btn_atras_create'>Atras</button>
                </Link>
            </div>
        <div className='contenedoor'>
            <form onSubmit={Submit} className='formularioo'>
                <h2 className='title_h2'>CREAR VIDEOJUEGO</h2>
                <div className='inputs_header'>
                    <div className='inputs_3'>

                        <label className='label'>Nombre</label>
                        <input ref={input_name} className='inputt' type='text' placeholder='Nombre del videojuego...'/>
                        
                        <label className="label">Description</label>
                        <input ref={input_description} className='inputt' placeholder='Descripcion...' />
                        
                        <label className="label">Rating:</label>
                        <input ref={input_rating} className='inputt' placeholder='Rating...'/>
                        
                    </div>
                    <div className='inputs_2'>

                    <label className="label">Fecha de lanzamiento:</label>
                    <input ref={input_released} className='inputt' placeholder='Lanzamiento...'/>
                    <label className="label">Imagen:</label>
                    <input ref={input_img} className='inputt' placeholder='Url...'/>
                    {/* <br/>  */}
                    </div>

                </div>

                <label className="label">Plataformas:</label>
                <div className="contenedordeinputs">
                    <input className='inputts' ref={input_platforms1} placeholder='Opcion 1'/>
                    <input className='inputts' ref={input_platforms2} placeholder='Opcion 2'/>
                    <input className='inputts' ref={input_platforms3} placeholder='Opcion 3'/>
                    <input className='inputts' ref={input_platforms4} placeholder='Opcion 4'/>
                </div>
                <br/>
                <button type='button' className='label_btn' onClick={()=>{setActivador('true')}}>
                   Generos
                </button>
                {
                    btnAct(activador)
                }
                <button type='submit' className='btnCreate'>Crear!</button>
            </form>
        </div>
    </>
    )
}


