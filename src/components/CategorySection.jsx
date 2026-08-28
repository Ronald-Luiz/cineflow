function CategorySection({
    id,
    titulo,
    descricao,
    itens = [],
    tipo = "filme",
}) {
    return (
        <section className="movie-section" id={id}>
            <div className="section-header">
                <div>
                    <span className="section-label">
                        CINEFLOW
                    </span>

                    <h2>{titulo}</h2>
                </div>

                <span className="section-description">
                    {descricao}
                </span>
            </div>

            <div className="movie-grid">
                {itens.slice(0, 5).map((item) => (
                    <article className="movie-card" key={item.id}>
                        <div className="movie-poster">
                            {item.imagem ? (
                                <img
                                    src={item.imagem}
                                    alt={`Capa de ${item.titulo}`}
                                />
                            ) : (
                                <span>🎬</span>
                            )}
                        </div>

                        <div className="movie-info">
                            <h3>{item.titulo}</h3>

                            <p>
                                {item.ano || "Disponível agora"} • {tipo}
                            </p>

                            {item.categoria && (
                                <span className="movie-category">
                                    {item.categoria}
                                </span>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default CategorySection