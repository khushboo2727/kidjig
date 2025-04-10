import React from 'react'
import './App.css'
import Menu from './Home/Menu/Menu'
import Header from './Home/Header/Header'
import Slider from './Home/Slider/Slider'
import MainContainer from './Home/MainContainer/MainContainer'
import Explore from './Home/Explore/Explore'
import Question from './Home/Questionniear/Question'
import Footer from './Home/Footer/Footer'


function App() {
  return (
    <>
    <Menu/>
     <Header/>
     <Slider/>
     <MainContainer/>
     <Explore/>
     <Question/>
     <Footer/>
    </>
  )
}

export default App
