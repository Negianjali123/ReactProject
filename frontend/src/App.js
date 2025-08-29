
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import { Contact } from './Pages/contact';
import Navbar from './Component/Navbar';
import Registration from './Pages/registration';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* Navigation */}
      <Navbar/>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
