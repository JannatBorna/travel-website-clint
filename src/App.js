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
           <Route path="/contact" element={<Contact />} />
      
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
