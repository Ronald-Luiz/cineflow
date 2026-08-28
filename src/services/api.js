const API_URL = ""

export async function buscarFilmes() {
    try {
        const response = await fetch(`${API_URL}/filmes`)

        if (!response.ok) {
            throw new Error("Erro ao buscar filmes")
        }

        const data = await response.json()

        return data
    } catch (error) {
        console.error("Erro na API:", error)

        return []
    }
}