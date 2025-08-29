import '../App.css';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg colournav sticky-sm-top  z-1">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between text-light" id="navbarSupportedContent">
                    {/* Center Nav with Home */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item text-light">
                            <a className="nav-link active " aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                        </li>
                    </ul>

                    {/* Right-side Avatar dropdown */}
                    <ul className="navbar-nav mb-2 mb-lg-0 ">
                        <li>
                            <a href="/registration" className='btn btn-round btnhover w-100'>Sign Up</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                AVATAR
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="/">LOGOUT</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}