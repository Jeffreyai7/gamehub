import UseGenres from "../hooks/UseGenres";


function Genres() {

    const {data}  = UseGenres()
    
    return (
        <ul>
            {
            data.map((genre) => <li key={genre.id} >{genre.name}</li>  )   
            }
        </ul>
    );
}

export default Genres;

