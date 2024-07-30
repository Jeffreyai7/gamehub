import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './componenets/NavBar'
import GameGrid from './componenets/GameGrid'
import Genres from './componenets/Genres'


function App() {

  return (
    <>
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
       }}>
      <GridItem area={"nav"} bg={"white"}>
        <NavBar/>
      </GridItem>
       <Show above='lg'>
      <GridItem area={"aside"}>
        <Genres/>
      </GridItem>
       </Show>
      <GridItem area={"main"}>
       <GameGrid/>
      </GridItem>
    </Grid>
    </>
  )
}

export default App
