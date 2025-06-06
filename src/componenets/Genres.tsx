import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import UseGenres from "../hooks/UseGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

function Genres() {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, isLoading, error } = UseGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <div className="fixed">
      <Heading fontSize={"2xl"} marginBottom={3} marginTop={10}>
        Genres
      </Heading>
      <div className="scroll">
        <List>
          {data?.results.map((genre) => (
            <ListItem key={genre.id} paddingY={"15px"}>
              <HStack gap={5}>
                <Image
                  objectFit={"cover"}
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  whiteSpace="wrap"
                  textAlign="left"
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  onClick={() => setSelectedGenreId(genre.id)}
                  fontSize={"lg"}
                  variant={"link"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default Genres;
