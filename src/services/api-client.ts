import axios from "axios"

export default  axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '984d5e263f694a07a009e771ff154415'
    }
})



// 984d5e263f694a07a009e771ff154415