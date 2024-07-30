import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchGenresResponse{
    count: number,
    results: Genres[]
}

interface Genres {
id: number,
name: string
}

function UseGenres() {
    
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState('')
    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setIsloading(true)
      apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
      .then(res => {
        setGenres(res.data.results)
        setIsloading(false)
      } 
    
    )
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setIsloading(false)
      } );
      return () => controller.abort();
    }, [])
    
    return {
        genres, error, isLoading
    }    
    
    

}

export default UseGenres;