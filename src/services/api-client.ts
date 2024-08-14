import axios from "axios"

export  interface FetchResponse<T>{
    count: number,
    results: T[]
}



export default  axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '984d5e263f694a07a009e771ff154415'
    }
})



// 984d5e263f694a07a009e771ff154415