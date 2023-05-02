import React from 'react';
import Header from '../header/Header'
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import TourDetails from '../TourDetails/TourDetails';
import {Routes, Route} from 'react-router-dom'
function Home() {
  return (
    <>
      <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Tours/>}/>
            <Route path='/city/:id' element={<TourDetails/>}/>
          </Routes>
        </main>
      <Footer/>
    </>
    )
}

export default Home
