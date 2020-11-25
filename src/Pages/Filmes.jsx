import filmes from '../Services/dados'
import '../Styles/Pages/filmes.css'

const Filmes = ()=>{
       
    return (
        <>
         <div id="container">
            {
                filmes.map(filme=>{
                    return <div key={filme.id} className="card">
                        <h3>Título: {filme.nome}</h3>
                        <p>Gênero: {filme.genero}</p>
                        <img src={filme.capa} alt="capa"/>
                    </div>
                })
            }

         </div>
        </>
    )
}

export default Filmes