import UsePlatforms from "./UsePlatforms";

function UsePlatform(id?: number) {
    const {data: platforms} = UsePlatforms();
    
    return platforms?.results.find((p : any) => p.id === id)
}

export default UsePlatform;