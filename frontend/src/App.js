import React, { createContext, useState,useEffect  } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/Irshadat1';
import Wasfa from './components/Wasfat';
import Mohem from './components/Mohem';
import Irshadat2 from './components/Irshadat2'
import { Routes, Route } from 'react-router-dom';
import Was0 from './components/Was0';
import Was1 from './components/Was1';
import Was2 from './components/Was2';
import Was3 from './components/Was3';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const UserContex = createContext()


const App = () => {

  const [login, setLogin] = useState()

  const [token, setToken] = useState(localStorage.getItem("token"))

  useEffect(() => {
    document.title = "Dr-Ahmad Elayian"; // تعيين اسم الموقع هنا
  }, []);

  return (
    <UserContex.Provider value={{ login, setLogin,token, setToken }}>
      <Navbar />
      
      <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/About' element={<About />} />
      <Route path='/Wasfa' element={<Wasfa />} />
      <Route path='/Mohem' element={<Mohem />} />
      <Route path='/Irshadat2' element={<Irshadat2 />} />
      <Route path='/Was0' element={<Was0 />} />
      <Route path='/Was1' element={<Was1 />} />
      <Route path='/Was2' element={<Was2 />} />
      <Route path='/Was3' element={<Was3 />} />
      
      </Routes>
    </UserContex.Provider>
  )
}

export default App;
 

/*  <Route path='/product/:id' element={<Product />} />
    <Route path='/data/:id' element={<Data />} /> 
  <Route path='/AddFavorites' element={<AddFavorites />} /> */