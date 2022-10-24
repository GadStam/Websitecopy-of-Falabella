import react from 'react'
import errorimg from '../img/giphy.gif'
function NotFound(){
    return(
        <div>
        <h1 style={{marginBottom:'5rem', marginTop:'5rem'}}>Error en la pagina, vuelva a la home</h1>
        <img className='center' src={errorimg} alt=""></img>
        </div>
    )
}

export default NotFound;