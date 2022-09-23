import { AllCartas } from "../components/Cartas/AllCartas"
import { Paginations } from "../components/Paginations"


export const Home = () => {


    return (
        <div className='container-fluid'>
            <h1 className="title center">Cards</h1>

            <AllCartas />
            {/*<Paginations />*/}
        </div>
    )
}
