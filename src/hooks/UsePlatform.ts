import usePlatforms from './UsePlatforms';

function UsePlatform(id?: number) {
    const {data: platforms} = usePlatforms()
    
    return platforms?.results.find((p) => p.id === id)
}

export default UsePlatform;