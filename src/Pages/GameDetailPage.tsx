import { useNavigate, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Container,
  Heading,
  Spinner,
  Text,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";

function GameDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <Container maxW="container.md" paddingY={10}>
      <Heading> {game?.name} </Heading>
      <Image src={game?.background_image} width={"fit-content"} />
      <Text> {game?.description_raw!} </Text>
      <HStack>
        <Button onClick={() => navigate("/")}>Go back to Home</Button>
      </HStack>
    </Container>
  );
}

export default GameDetailPage;
