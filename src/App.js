import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/pages/Shared/Header/Header';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
           <Route path="/contact" element={<Contact />} />
      
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
