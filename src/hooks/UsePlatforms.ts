import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { Platform } from "../Entities/Platform"

const apiClient = new APIClient<Platform>('/platforms/lists/parents')



// UseData<Platform>("/platforms/lists/parents")

const UsePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime : 24 * 60 * 60 * 1000,
})




export default UsePlatforms