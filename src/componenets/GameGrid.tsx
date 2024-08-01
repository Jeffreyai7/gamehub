import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/UseGenres';

interface Props {
    selectedGenre: Genre | null

}

function GameGrid({selectedGenre}: Props) {
    const {data, error, isLoading} = useGames(selectedGenre);
    // const {genres} = UseGenres();

    const skeletons = [1, 2, 3, 4, 5, 6];
    
    return (
        error ? <Text color={"red"} >{error}</Text> 
        : 
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5 }} marginTop={2} spacing={10} >
           {
            isLoading && skeletons.map(skeleton => {
             return  <GameCardContainer key={skeleton} >
                    <GameCardSkeleton />
                    </GameCardContainer>   
            } )
           }
           
            {
              data.map(game => {
               return <GameCardContainer key={game.id} ><GameCard  game={game} /></GameCardContainer> 
              }  )
            }  
        </SimpleGrid>


    ) 
    
        
}

export default GameGrid;
