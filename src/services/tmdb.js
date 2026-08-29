const API_URL = "https://api.themoviedb.org/3"

const TOKEN = import.meta.env.VITE_TMDB_TOKEN

const headers = {
    Authorization: `Bearer ${TOKEN}`,
    accept: "application/json",
}


// =========================
// FILMES
// =========================

export async function buscarFilmes() {
    try {
        const resposta = await fetch(
            `${API_URL}/discover/movie?language=pt-BR&sort_by=popularity.desc&page=1`,
            {
                headers,
            }
        )

        if (!resposta.ok) {
            throw new Error("Erro ao buscar filmes")
        }

        const dados = await resposta.json()

        return dados.results.map((filme) => ({
            id: filme.id,

            titulo: filme.title,

            ano: filme.release_date
                ? filme.release_date.substring(0, 4)
                : "Disponível agora",

            categoria: "Filme",

            imagem: filme.poster_path
                ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
                : "",
        }))
    } catch (erro) {
        console.error("Erro TMDB - filmes:", erro)

        return []
    }
}


// =========================
// SÉRIES
// =========================

export async function buscarSeries() {
    try {
        const resposta = await fetch(
            `${API_URL}/discover/tv?language=pt-BR&sort_by=popularity.desc&page=1`,
            {
                headers,
            }
        )

        if (!resposta.ok) {
            throw new Error("Erro ao buscar séries")
        }

        const dados = await resposta.json()

        return dados.results.map((serie) => ({
            id: serie.id,

            titulo: serie.name,

            ano: serie.first_air_date
                ? serie.first_air_date.substring(0, 4)
                : "Disponível agora",

            categoria: "Série",

            imagem: serie.poster_path
                ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
                : "",
        }))
    } catch (erro) {
        console.error("Erro TMDB - séries:", erro)

        return []
    }
}