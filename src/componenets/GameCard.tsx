import { Game } from "../hooks/useGames"
import { Card, CardBody, Heading, HStack, Image, } from '@chakra-ui/react';
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";

interface Props {
    game: Game
}


function GameCard({ game } : Props) {
    return (
        <Card borderRadius={10} overflow={"hidden"} >
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={"2xl"} >{game.name}</Heading>
                <HStack justifyContent={"space-between"} marginX={1} >
                <PlatformiconList platforms={ game.parent_platforms.map(p => p.platform) } />
                <CriticScore metacritic={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;