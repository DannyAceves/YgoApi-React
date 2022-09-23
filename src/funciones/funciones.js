import axios from "axios";

    const allCards = async (state) =>{
        const peticion = await axios.get("http://localhost:5174/data")
        //const peticion = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php/`)
        state(peticion.data)
    }

    const oneCard = async (id,state) =>{
        const peticion = await axios.get(`http://localhost:5174/data/${id}`)
        //const peticion = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php/&id${id}`)
        state(peticion.data)
    }

        const nextHandler = () =>{
            console.log("next")
        }

        const prevHandler = () =>{
            console.log("prev")
        }
    

export{
    allCards,
    oneCard,
    nextHandler,
    prevHandler
}