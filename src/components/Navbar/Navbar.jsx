
export const Navbar = ({ brand }) => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand text-uppercase" href="/">{brand}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Cartas</a>
                        </div>            



                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
