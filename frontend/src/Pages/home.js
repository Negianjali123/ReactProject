import { useState } from 'react';
import {SigninFormSchema} from '../schema/loginSchema'
export default function Home() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [fieldErrors, setfieldErrors] = useState({ email: '', password: '' })

    const handleSubmit = async (e) => {
       
        e.preventDefault();
        const result = SigninFormSchema.safeParse(formData);
        if (!result.success) {
          const fieldErrors = { email: '', password: '' };
          result.error.errors.forEach((err) => {
            fieldErrors[err.path[0]] = err.message;
          });
          setfieldErrors(fieldErrors);
          return;
        }
        // try {
        //   setLoading(true);
        //   // console.log("formData before submit:", JSON.stringify(formData));
        //   const response = await api.post('/login', formData, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   });
    
        //   const data = response.data;
        //   // console.log('first',data)
        //   if (data.success === true) {
        //     const user=response.data.user.name;
        //     const username = encrypt(user);
        //     setUsernav(username);
        //     router.push('/user/dashboard'); 
            
        //   } else {
        //     if (data.email) {
        //       setfieldErrors({ email: data.message, password: '' });
        //     } else if (data.password) {
        //       setfieldErrors({ email: '', password: data.message });
        //     } else {
        //       setfieldErrors({ email: '', password: '' }); // fallback
        //     }
        //   }
        // }
        // catch (err) {
        //   console.error('Network error:', err);
        // }
    
      };
    return (
        <>
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <div className="card" >
                    <div className="card-tittle mt-3">
                        <h3 className="text-center titlename">Sign In</h3>
                    </div>
                    <div className="card-body">
                        <form action="/users" method="POST" className="space-y-6 form-floating" onSubmit={handleSubmit}>    
                            <div className="mb-3">
                                <label for="InputEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-5">
                                <label for="InputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="InputPassword"/>
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" className="btn btnhover w-100 mb-3">Submit</button>
                           
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}