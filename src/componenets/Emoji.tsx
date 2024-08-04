import { Image, ImageProps } from "@chakra-ui/react";
// import { FaThumbsUp, FaBullseye, FaMeh } from "react-icons/fa";
import bullseye from "../assets/images/direct-hit.svg"
import thumbsUp from "../assets/images/thumbs-up.svg"
import Meh from "../assets/images/neutral-face.svg"



interface Props {
    rating: number
}


function Emoji({rating}: Props) {

    if (rating < 3) return null 
    const EmojiMap: {[key: number]: ImageProps  } = {
            3: {src: Meh, alt: "meh"},
            4: {src: thumbsUp, alt: "recommended"},
            5: {src: bullseye, alt: "exceptional"},


    }
    
    
    return (
        <Image boxSize={5} {...EmojiMap[rating]} />  
    );
}

export default Emoji;