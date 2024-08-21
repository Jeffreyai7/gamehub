import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../componenets/NavBar";


function ErrorPage() {

   const error =  useRouteError()
    return (
        <div>
            <NavBar/>
          <Heading>Ooops</Heading>
          <Text> { isRouteErrorResponse(error) ? 'This page does not exist' : 'Unexpected Error occured'   } </Text>  
        </div>
    );
}

export default ErrorPage;