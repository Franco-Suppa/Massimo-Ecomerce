import { Link } from "react-router-dom"
import Lottie from 'lottie-react'
import loadinglottie from '../assets/notfound.json'
import './Pagina404.css'

//Lottie Animation
const options = {
    animationData: loadinglottie,
    autoplay: true,
    loop: false,
    style: {width:"20%"}
}

function Pagina404() {
    return (
        <div>
            <h1>Pagina no encontrada</h1>
            <Link to="/"><p>{'<<'}Volver al inicio</p></Link>
            <Lottie className="notFound" {...options} />
        </div>
    )
}

export default Pagina404