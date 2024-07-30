import { Badge } from '@chakra-ui/react';

interface Props{
    metacritic: number
}

function CriticScore({metacritic} : Props) {
    let color = metacritic > 75 ? 'green' : metacritic > 60 ? 'yellow' : "";
    
    return (

        <Badge colorScheme={color} fontSize={"14px"} paddingX={2} borderRadius={4}  >{metacritic}</Badge>

    );
}

export default CriticScore;