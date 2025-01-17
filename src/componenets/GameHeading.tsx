import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../store';
import usePlatform from '../hooks/usePlatform';


function GameHeading() {

 const genreId =   useGameQueryStore(s => s.gameQuery.genreId)
 const genre = useGenre(genreId)
 
 const platformId = useGameQueryStore(s => s.gameQuery.genreId)
 const platform = usePlatform(platformId);
   
   
   const heading = `${platform?.name || "" } ${genre?.name || ""} Games`   
   
    return (
        <Heading as="h1" marginTop={8} marginBottom={4} >
                {heading}
        </Heading>
    );
}

export default GameHeading;