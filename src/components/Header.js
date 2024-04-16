import React from 'react'

function Header() {
    return (
        <div>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
            />

            {/* NavBar */}

            <header className="navbar navbar-expand-lg navbar-light bg-lightblue" >
                <a className="navbar-brand" href="#" style={{ color: "green", fontSize: "30px" ,paddingLeft:"10px"}}>
                    MediConnect
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home" style={{ color: "green", fontSize: "18px" }}>
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: "green", fontSize: "18px" }}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: "green", fontSize: "18px" }}>
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" style={{ color: "green", fontSize: "18px" }} >
                                Signout
                            </a>
                        </li>
                    </ul>
                    {/*<button onClick={handleSubmit}>Mobile</button>*/}
                </div>
            </header>
            {/* NavBar */}
        </div>
    )
}

export default Header
