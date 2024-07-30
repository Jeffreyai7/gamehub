import UseGenres from "../hooks/UseGenres";

function Genres() {

    const {genres} = UseGenres()
    
    return (
        <ul>
            {
            genres.map((genre) => <li key={genre.id} >{genre.name}</li>  )   
            }
        </ul>
    );
}

export default Genres;