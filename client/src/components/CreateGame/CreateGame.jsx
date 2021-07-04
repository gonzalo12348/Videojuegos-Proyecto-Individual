import './CreateGame.css'
import { useEffect, useRef, useState } from 'react'
import { getGenres } from '../../store/actions/getGenres'
import { useDispatch, useSelector } from 'react-redux'
import {mostrarGeneros , agregarPlataforma} from './CreateGameController'
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

    //Estado local del juego creado
    const [juegoPost, setJuegoPost] = useState({
        name:'',
        description:'',
        released:'',
        rating:'',
        platforms:'',
        genres:[]
    })

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
        for(let i = 0; i <= 18;i++){
            formulario.current[i].value!='on' && form.push(formulario.current[i].value)
        }
        var array = [input_platforms1.current.value,input_platforms2.current.value,input_platforms3.current.value,input_platforms4.current.value]
        // setJuegoPost({
        //     name:input_name.current.value,
        //     description:input_description.current.value,
        //     released:input_released.current.value,
        //     rating:input_rating.current.value,
        //     platforms:array + '',
        //     genres:form,
        //     img:input_img.current.value
        // })
        dispatch(postGame({
            name:input_name.current.value,
            description:input_description.current.value,
            released:input_released.current.value,
            rating:input_rating.current.value,
            platforms:array + '',
            genres:form,
            img:input_img.current.value
        }))
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

    // useEffect(async()=>{
    //     if(juegoPost.name.length > 0){
    //         await dispatch(postGame(juegoPost))
    //     }
    // },[juegoPost])


    useEffect(()=>{
        dispatch(getGenres())
    },[])
    useEffect(()=>{
        console.log('este es el activadorrrrrrrrrrrrr',activador);
    },[activador])
    return(
    <>
        <div className='btn_cont_form'>
            <Link path to='/home'>
                <button onClick={cerrarNavbar} className='btn_atras_create'>Atras</button>
            </Link>
        </div>
        <div className='contenedoor'>
            <form onSubmit={Submit} className='formularioo'>
                <label className='label'>Nombre</label>
                <input ref={input_name} className='inputt' type='text' placeholder='Nombre del videojuego...'/>
                
                <label className="label">Description</label>
                <input ref={input_description} className='inputt' placeholder='Descripcion...' />
                
                <label className="label">Rating:</label>
                <input ref={input_rating} className='inputt' placeholder='Rating...'/>
                <label className="label">Fecha de lanzamiento:</label>
                <input ref={input_released} className='inputt' placeholder='Lanzamiento...'/>
                <label className="label">Imagen:</label>
                <input ref={input_img} className='inputt' placeholder='Url...'/>
                <br/>          
                <label className="label">Plataformas:</label>
                <div className="contenedordeinputs">
                    <input className='inputts' ref={input_platforms1} placeholder='Opcion 1'/>
                    <input className='inputts' ref={input_platforms2} placeholder='Opcion 2'/>
                    <input className='inputts' ref={input_platforms3} placeholder='Opcion 3'/>
                    <input className='inputts' ref={input_platforms4} placeholder='Opcion 4'/>
                </div>
                <br/>
                <button className='label_btn' onClick={()=>{activador !=='true'?setActivador('true'):setActivador('falso')}}>
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


