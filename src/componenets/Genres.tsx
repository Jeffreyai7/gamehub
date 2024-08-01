import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import UseGenres from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-url";


function Genres() {

    const {data, isLoading, error}  = UseGenres();


    if(error) return null
    if(isLoading) return <Spinner/>
    
    return (
        <List>
            {
            data.map((genre) => <ListItem key={genre.id} paddingY={"5px"}>
                <HStack gap={5} >
                    <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                    <Text>{genre.name}</Text>
                    </HStack>
            </ListItem> )   
            }
        </List>
    );
}

export default Genres;

