import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './componenets/NavBar'
import GameGrid from './componenets/GameGrid'
import Genres from './componenets/Genres'
import { useState } from 'react'
import { Genre } from './hooks/UseGenres'
import PlatformSelector from './componenets/PlatformSelector'
import { Platform } from './hooks/useGames'


export  interface GameQuery {
  genre: Genre | null;
  platform: Platform | null
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
 
  return (
    <>
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
       }}
       templateColumns={{
        base: '1fr', lg: '200px 1fr'
       }}
       >
      <GridItem area={"nav"} bg={"white"}>
        <NavBar/>
      </GridItem>
       <Show above='lg'>
      <GridItem area={"aside"}>
        <Genres selectedGenre={gameQuery.genre}  onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre} )} />
      </GridItem>
       </Show>
      <GridItem area={"main"}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
       <GameGrid  gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
    </>
  )
}

export default App
