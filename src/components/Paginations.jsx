

export const Paginations = ({ setCurrentPage }) => {

    let next = () => {
        setCurrentPage((x) => x + 1);
    };

    let prev = () => {
        setCurrentPage((x) => x - 1);
    };

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <button className="page-link" onClick={prev}>Previous</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={next}>Next</button>
                    </li>
                </ul>
            </nav>


        </>
    );
}
