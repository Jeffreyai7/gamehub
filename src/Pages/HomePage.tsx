import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import GameGrid from "../componenets/GameGrid";
import GameHeading from "../componenets/GameHeading";
import Genres from "../componenets/Genres";
import PlatformSelector from "../componenets/PlatformSelector";
import SortSelector from "../componenets/SortSelector";

function HomePage() {
    return (
        <>
        <Grid templateAreas={{
      base: `"main"`,
      lg: `"aside main"`
       }}
       templateColumns={{
        base: '1fr', lg: '200px 1fr'
       }}
       >
       <Show above='lg'>
      <GridItem area={"aside"}>
        <Genres />
      </GridItem>
       </Show>
      <GridItem area={"main"} marginBottom={5}>
        <GameHeading/>
        <HStack spacing={5} >
        <PlatformSelector />
        <SortSelector/>
        </HStack>
        <GameGrid/>
      </GridItem>
    </Grid>
        </>
    );
}

export default HomePage;