import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import '../Styles/Pages/home.css'

const Home = () => {
    return(
        <div id = "page-landing">
            <div className = "content-wrapper">
                <main>
                    <h1>Chegou a hora de maratonar!</h1>
                    <p>Vem viver esse momento!</p>
                </main>

                <Link to='/filmes' className ="enter-app">
                    <FiArrowRight  size={26} color="rgba(0, 0, 0, 0.6)"/>                
                </Link>


            </div>
        
        </div>

    )
}

export default Home