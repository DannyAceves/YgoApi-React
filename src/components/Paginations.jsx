
import { nextHandler } from "../funciones/funciones";
import { prevHandler } from "../funciones/funciones";

export const Paginations = (props) => {

    useEffect(() => {
        nextHandler()
    }, [])


    useEffect(() => {
        prevHandler()
    }, [])



    const items = props.items.map((item,i)=>{
        return <li key={item.id}>{item.name}</li>
    })

    return (
        <>
            <nav aria-label="Page navigation example">
                <p>Pagina:{props.currentPage}</p>
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <button className="page-link" onClick={props.prevHandler}>Previous</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={props.nextHandler}>Next</button>
                    </li>
                </ul>
            </nav>


        </>
    );
}
