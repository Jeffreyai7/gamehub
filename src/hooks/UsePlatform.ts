import usePlatforms from "./usePlatforms";

function UsePlatform(id?: number) {
    const {data: platforms} = usePlatforms()
    
    return platforms?.results.find((p) => p.id === id)
}

export default UsePlatform;