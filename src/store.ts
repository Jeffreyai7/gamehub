


interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string |  null,
    searchText: string 
  }
  



interface GameQueryStore{
    gameQuery: GameQuery
}