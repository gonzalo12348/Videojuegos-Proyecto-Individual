
export function mostrarGeneros(generos){
    return generos.map((item, i) => (
        <label>   
            <input className='input_generos' key={item.name + i} type='checkbox' onClick={(e)=>{
                    let valor = e.target.value
                    if(valor=='on'){
                        e.target.value = item.name   
                    }else{
                        e.target.value = 'on'
                    }         
                }}/>
            {item.name}
        </label>
    ))
}