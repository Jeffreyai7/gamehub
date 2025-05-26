import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";
import UsePlatform from "../hooks/UsePlatform";

function GameHeading() {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platform = UsePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginTop={8} marginBottom={4}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
