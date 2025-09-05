import { useEffect,useContext,useState } from 'react';
import '../App.css';
import UserContext from './context/UserContext';
import { decryptData } from '../utils/crypto';

export default function Navbar() {
    let { encryptedName } = useContext(UserContext);
    const [username, setUsername] = useState(null);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {

            localStorage.removeItem("user");
            setUsername(null);
            // setUser(null);
            // await api.get('/user/logout');
            window.location.href = '/';
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }
    useEffect(() => {
        // let decryptedName = "";
        if(encryptedName)
        {
            try {
                let decryptedUsername = decryptData(encryptedName);
                setUsername(decryptedUsername);
            } catch (err) {
                setUsername('');
            }
        }
        
    }, [encryptedName]);

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

                        {username ? (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {username}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item"  href="/"  onClick={handleLogout} >LOGOUT</a></li>
                                </ul>
                            </li>

                        ) : (
                            <li>
                                <a href="/registration" className='btn btn-round btnhover w-100'>Sign Up</a>
                            </li>
                        )}


                    </ul>
                </div>
            </div>
        </nav>
    )
}