import './App.css';
import Navbar from './components/Navbar';
import Theme from './components/Theme';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';



function App() {

  const handleAnimationComplete = () => {
  console.log("Animation done!");
};

  return (
    <div className="h-screen w-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects/>} />
      </Routes>
      <Theme />
      <Footer />
    </div>
  )
}

export default App;
