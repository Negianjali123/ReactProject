import { useState,useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from "../Component/context/UserContext";
import api from '../utils/api'
import { encryptData } from '../utils/crypto'
import { SigninFormSchema } from '../schema/loginSchema'


export default function Home() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [fieldErrors, setfieldErrors] = useState({ email: '', password: '' })
    const { encryptedName,setEncryptedName } = useContext(UserContext);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        localStorage.removeItem('user');
        setEncryptedName(null);
        const checkSession = async () => {

          try {
            const response = await api.get('/session-check');
            if (response.data.success) {
              console.log("Session is valid:", response.data);
            }
          } catch (error) {
            console.error("Session invalid or error:", error);
          }
        };
        checkSession();
      }, [encryptedName]);
      
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = SigninFormSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = { email: '', password: '' };
            result.error.issues.forEach((err) => {
                fieldErrors[err.path[0]] = err.message;
            });
            setfieldErrors(fieldErrors);
            return;
        }
        try {
            //   setLoading(true);
            await api.post('http://localhost:7000/login', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    let username = res.data.user.name;
                    let name = encryptData(username)
                    setEncryptedName(name);
                    navigate('/user/dashboard');
                })
                .catch(err => {
                    let data = err.response?.data
                    if (data.email) {
                        setfieldErrors({ email: data.message, password: '' });
                    } else if (data.password) {
                        setfieldErrors({ email: '', password: data.message });
                    } else {
                        setfieldErrors({ email: '', password: '' }); // fallback
                    }
                })
        }
        catch (err) {
            console.error('Network error:', err);
        }
    };
    // if (loading) return <div className="loader" ></div>;
    return (
        <>
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <div className="card" >
                    <div className="card-tittle mt-3">
                        <h3 className="text-center titlename">Sign In</h3>
                    </div>
                    <div className="card-body">
                        <form action="/login" method="POST" className="space-y-6 form-floating" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="InputEmail" className="form-label">Email address</label>
                                <input className="form-control" id="InputEmail" name='email' aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                {fieldErrors.email && <p className="validationerror mt-1">{fieldErrors.email}</p>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="InputPassword" className="form-label">Password</label>
                                <input className="form-control" id="InputPassword" onChange={handleChange} value={formData.password} name='password' />
                                {fieldErrors.password && <p className="validationerror mt-1">{fieldErrors.password}</p>}
                            </div>
                            <button type="submit" className="btn btnhover w-100 mb-3">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}