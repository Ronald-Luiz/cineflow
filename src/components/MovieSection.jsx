import MovieCard from "./MovieCard"
import { filmes } from "../data/movies"

function MovieSection() {
    return (
        <section className="movie-section" id="filmes">
            <div className="section-header">
                <div>
                    <span className="section-label">
                        CINEFLOW
                    </span>

                    <h2>Filmes em destaque</h2>
                </div>

                <span className="section-description">
                    Alguns dos títulos disponíveis
                </span>
            </div>

            <div className="movie-grid">
                {filmes.slice(0, 5).map((filme) => (
                    <MovieCard
                        key={filme.id}
                        titulo={filme.titulo}
                        ano={filme.ano}
                        tipo={filme.tipo}
                        categoria={filme.categoria}
                        imagem={filme.imagem}
                    />
                ))}
            </div>
        </section>
    )
}

export default MovieSection