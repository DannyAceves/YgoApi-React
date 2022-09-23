import axios from "axios";

const baseUrl ='http://localhost:5174/data'

export const getAll = async ()=>{
    const res = await axios.get(baseUrl)
    return res.data
}