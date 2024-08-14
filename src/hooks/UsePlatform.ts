import { useQuery } from "@tanstack/react-query"
import apiClient, { FetchResponse } from "../services/api-client"



export interface Platform {
id: number,
name: string,
slug: string
}


// UseData<Platform>("/platforms/lists/parents")

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => 
        apiClient
                .get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
    staleTime : 24 * 60 * 60 * 1000,
})




export default usePlatforms