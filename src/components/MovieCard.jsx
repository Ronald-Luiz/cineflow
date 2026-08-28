function MovieCard({ titulo, ano, tipo, categoria, imagem }) {
    return (
        <article className="movie-card">
            <div className="movie-poster">
                <img src={imagem} alt={`Capa de ${titulo}`} />
            </div>

            <div className="movie-info">
                <h3>{titulo}</h3>

                <p>
                    {ano} • {tipo}
                </p>

                <span className="movie-category">
                    {categoria}
                </span>
            </div>
        </article>
    )
}

export default MovieCard