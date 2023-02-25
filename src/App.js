import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/pages/Shared/Header/Header';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import Blogs from './components/pages/Blogs/Blogs';
import Login from './components/Signup/Login/Login';
import Register from './components/Signup/Register/Register';
import Shops from './components/pages/Shop/Shops/Shops';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
