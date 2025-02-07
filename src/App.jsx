import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Router } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
import Navbars from './component/Navbar/Navbars';
// import DemoCarousel from './component/Home/DemoCarousel';
import Home from './component/Home/Home';
import Error from './component/Error';
import Explore from './component/Category/Explore';
import Foodinfo from './component/foodinfo/Foodinfo';
import Footer from './component/Footer/Footer';
import Foodname from './component/foodname/Foodname';
import Searchfood from './component/search-food/Searchfood';
import Savefood from './component/savefoodinfo/Savefood';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Row>
        <Navbars />
      </Row>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/searchfood" element={<Searchfood />} />
        <Route path="/savedfood" element={<Savefood />} />
        <Route path="/Explore/:id" element={<Explore />} />
        <Route path="/Foodinfo/:id" element={<Foodinfo />} />
        <Route path="/Foodname/:id" element={<Foodname />} />
        <Route path="/Third/*" element={<Error />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>

      <Row>
        <Footer />
      </Row>
      <Toaster />
    </>
  )
}

export default App
