import axios from "axios";

const allCards = async (state) =>{
    const peticion = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    state(peticion.data.data)
}

    const oneCard = async (id,state) =>{
        const peticion = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php/${id}`)
        state(peticion.data)
    }


export{
    allCards,
    oneCard
}