import React from 'react'
import NavBar from "./components/NavBar/NavBar"
import './App.css'
import Hero from './components/Hero/Hero'
import Skills from './components/Skill/Skills'
import WorkExp from './components/WorkExp/WorkExp'

function App() {


  return (
    <>
    <NavBar />
    <Hero/>
    <Skills/>
    <WorkExp/>
    </>
  )
}

export default App
