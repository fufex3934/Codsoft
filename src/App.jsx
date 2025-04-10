import {Routes,Route}  from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
    <div className='flex-grow'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App
