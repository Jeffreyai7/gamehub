import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import React from 'react';

interface Props {
    gameQuery: GameQuery
}

function  GameGrid({gameQuery}: Props) {
    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery);


    // const {genres} = UseGenres();

    const skeletons = [1, 2, 3, 4, 5, 6];
    
    if (error) return <Text color={"red"} >{error.message}</Text>


    return (
        <Box>
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4 }} marginY={5} spacing={10}  >
           {
            isLoading && skeletons.map(skeleton => {
             return  <GameCardContainer key={skeleton} >
                    <GameCardSkeleton />
                    </GameCardContainer>   
            } )
           }
           {
            data?.pages.map((page, index) => 
                <React.Fragment key={ index}>
                    {
                      page.results.map(game => {
                       return <GameCardContainer key={game.id} ><GameCard  game={game} /></GameCardContainer> 
                      }  )
                    }  
                    
                </React.Fragment>
            )
           }
        </SimpleGrid>
        {hasNextPage && <Button onClick={() => fetchNextPage()} >{isFetchingNextPage ? "Loading..." : "Load More"}</Button> }
        </Box>
    ) 
    
        
}

export default GameGrid;
