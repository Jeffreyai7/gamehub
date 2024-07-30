import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';


function GameGrid() {
    const {games, error, isLoading} = useGames();

    // const skeletons = [1, 2, 3, 4, 5, 6];
    
    return (
        error ? <Text color={"red"} >{error}</Text> 
        : 
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5 }} marginTop={2} spacing={10} >
            {
              games.map(game => {
               return <GameCard key={game.id} game={game} />
              }  )
            }  
        </SimpleGrid>


    ) 
    
        
}

export default GameGrid;
