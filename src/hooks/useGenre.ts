import UseGenres from "./UseGenres";


const useGenre = (id?: number) => {
    const {data: genres} = UseGenres();

    const genre = genres?.results.find(g => g.id === id)

return genre
}


export default useGenre