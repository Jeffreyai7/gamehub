import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T>{
    count: number,
    results: T[]
}


function UseData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[] ) {
    
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('')
    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setIsloading(true)
      apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig })
      .then(res => {
        setData(res.data.results)
        setIsloading(false)
      } 
    
    )
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setIsloading(false)
      } );
      return () => controller.abort();
    }, deps ? [...deps] : [])
    
    return {
        data, error, isLoading
    }    
    


}

export default UseData;