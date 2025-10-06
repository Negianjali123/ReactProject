
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './Component/Provider/UserProvider';
import CookieProvider from './Component/Provider/CookiesProvider';
import Home from './Pages/home';
import About from './Pages/about';
import { Contact } from './Pages/contact';
import Navbar from './Component/Navbar';
import Dashbord from './Pages/user/dashboard';
import Registration from './Pages/registration';
import AddToCard from './Pages/user/addtocard';
import PayUPayment from './Component/Payment/Payu';

import './App.css';

function App() {
  return (
    <>
        <BrowserRouter>
        <UserProvider>
          {/* Navigation */}
          <Navbar />
          </UserProvider>
          {/* <Home /> */}
          {/* Routes */}
          <Routes>
            <Route path="/" element={<UserProvider><Home /></UserProvider>} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/dashboard" element={<UserProvider><CookieProvider><Dashbord/></CookieProvider> </UserProvider>} />
            <Route path="/user/addtocard" element={<CookieProvider><AddToCard/></CookieProvider>} /> 
            <Route path="/user/Payment" element={<CookieProvider><PayUPayment/></CookieProvider>} />  
          </Routes>
         
        </BrowserRouter>
      
    </>
  );
}

export default App;
