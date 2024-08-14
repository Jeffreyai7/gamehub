import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import UseGenres, { Genre } from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void,
    selectedGenre: Genre | null
}


function Genres({selectedGenre,  onSelectedGenre}: Props ) {

    const {data, isLoading, error}  = UseGenres();


    if(error) return null
    if(isLoading) return <Spinner/>
    
    return (
        <>
        <Heading  fontSize={"2xl"} marginBottom={3} >Genres</Heading>
        <List>
            {
            data?.results.map((genre) => <ListItem key={genre.id} paddingY={"5px"}>
                <HStack gap={5} >
                    <Image objectFit={"cover"} boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                    <Button whiteSpace="wrap" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal" } onClick={() => onSelectedGenre(genre)} fontSize={"lg"} variant={"link"} >{genre.name}</Button>
                    </HStack>
            </ListItem> )   
            }
        </List>
        </>
    );
}

export default Genres;

