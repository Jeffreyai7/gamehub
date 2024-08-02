import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './componenets/NavBar'
import GameGrid from './componenets/GameGrid'
import Genres from './componenets/Genres'
import { useState } from 'react'
import { Genre } from './hooks/UseGenres'
import PlatformSelector from './componenets/PlatformSelector'
import { Platform } from './hooks/useGames'


function App() {

const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
        <Genres selectedGenre={selectedGenre}  onSelectedGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
       </Show>
      <GridItem area={"main"}>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
       <GameGrid  selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
    </>
  )
}

export default App
