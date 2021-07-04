const regEx = new RegExp('(<(br|p|div|\/div|br \/|\/p|strong|\/strong|br\/)>)','gi')


export function game(game){
    const { img , name , gender , rating , released , description , platforms} = game
    console.log('ACALOCOMIRALO',game);
    return (
        <div className='containerDetails'>
            <div className='faa'>
                <img src={img} alt='img game' className='imgDetails'/>
                <h1 className='titledetails'>{name}</h1>
            </div>
            <div className='description'>
                <div className='description2'>
                    <div className='genero'>
                    <h3 className='tituloss'>Genero:</h3>
                    { gender.length > 0 && gender.map(genero => <p>{genero}</p>)}
                    </div>
                    <p className='valoracion'><h3 className='tituloss'>Valoración:</h3><p>{rating}</p></p>
                    <p className='lanzamiento'><h3 className='tituloss'>Lanzamiento:</h3><p>{released}</p></p>
                    <div className='plataformas'>
                        <ul className='plat'>
                            <h3 className='tituloss'>Plataformas:</h3>
                            {platforms.map((plat, index) => <span key={'plat'+index}>{plat}</span>)}
                        </ul>
                    </div>
                </div>
                <div className='descriptiontext'>
                    <h2 className='titledescription'>Description:</h2>
                    {<p>{description.replaceAll(regEx,' ')}</p>}
                </div>
            </div>
        </div>
    )
}
