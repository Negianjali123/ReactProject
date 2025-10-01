
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
import Product from './Pages/product';
import './App.css';

function App() {
  return (
    <>
        <BrowserRouter>
        <UserProvider>
          {/* Navigation */}
          <Navbar />
          {/* <Home /> */}
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user/dashboard" element={<CookieProvider><Dashbord /> </CookieProvider>} />
            <Route path="/user/addtocard" element={<CookieProvider><AddToCard /></CookieProvider>} />  
          </Routes>
          </UserProvider>
        </BrowserRouter>
      
    </>
  );
}

export default App;
