
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './Component/Provider/UserProvider';
import Home from './Pages/home';
import About from './Pages/about';
import { Contact } from './Pages/contact';
import Navbar from './Component/Navbar';
import Dashbord from './Pages/user/dashboard';
import Registration from './Pages/registration';
import './App.css';

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          {/* Navigation */}
          <Navbar />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/dashboard" element={<Dashbord />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
