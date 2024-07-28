import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './componenets/NavBar'
import GameGrid from './componenets/GameGrid'


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
      <GridItem area={"aside"} bg={"gold"}>aside</GridItem>
       </Show>
      <GridItem area={"main"} bg={"dodgerblue"}>
       <GameGrid/>
      </GridItem>
    </Grid>
    </>
  )
}

export default App
