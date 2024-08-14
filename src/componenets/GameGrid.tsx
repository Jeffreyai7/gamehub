import {SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
    gameQuery: GameQuery
}

function  GameGrid({gameQuery}: Props) {

    const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames(gameQuery);


    // const {genres} = UseGenres();

    const  fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

    const skeletons = [1, 2, 3, 4, 5, 6];
    
    if (error) return <Text color={"red"} >{error.message}</Text>


    return (
        <InfiniteScroll loader={<Spinner/>}  next={() => fetchNextPage()} hasMore={!!hasNextPage} dataLength={fetchedGamesCount} >
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
        </InfiniteScroll>
    ) 
    
}
        


export default GameGrid;


// {hasNextPage && <Button onClick={() => fetchNextPage()} >{isFetchingNextPage ? "Loading..." : "Load More"}</Button> }
