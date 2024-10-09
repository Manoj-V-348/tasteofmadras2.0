import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Blogs from "./pages/Blogs";

import './index.css'


function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/menu' element={<Menu/>} />
              <Route path='/gallery' element={<Gallery/>} />
              <Route path='/testimonials' element={<Testimonials/>} />
              <Route path='/blogs' element={<Blogs/>} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
