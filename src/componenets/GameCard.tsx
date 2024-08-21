import { Game } from '../Entities/Game';
import { Card, CardBody, Heading, HStack, Image, } from '@chakra-ui/react';
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
    game: Game
}


function GameCard({ game } : Props) {
    return (
        <Card borderRadius={10} overflow={"hidden"} >
            <Image src={ getCroppedImageUrl(game.background_image) } />
            <CardBody>
                <HStack justifyContent={"space-between"} marginX={1} marginBottom={3}  >
                <PlatformiconList platforms={ game.parent_platforms.map(p => p.platform) } />
                <CriticScore metacritic={game.metacritic} />
                </HStack>
                <Heading fontSize={"2xl"} >
                   <Link to={'/games/' + game.slug} >{game.name}</Link>  
                    <Emoji rating={game.rating_top}  /> </Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;