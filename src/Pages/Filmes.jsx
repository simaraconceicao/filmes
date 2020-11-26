import filmes from '../Services/dados'
import '../Styles/Pages/filmes.css'
import Sidebar from '../Components/Sidebar'


const Filmes = ()=>{
    return(
        <>
            <Sidebar/>
            <div id= "container">
                {filmes.map(filme =>{
                    return <div class="card" key={filme.id}>
                        <h3>Título: {filme.nome}</h3>
                        <p>Gênero: {filme.genero}</p>
                        <img src={filme.capa} alt="capas de filmes"/>
                    </div>
                })}
            </div>
        </>
    )
}

export default Filmes