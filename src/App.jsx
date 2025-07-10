import React from 'react'
import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import  './index.css'




const App = () => {
  return (
    <>
    <Header/>
    <main className="scroll-smooth">
        <section id="home"><Home /></section>
        <section id="about"><About/></section>
        <section id="project"><Project/></section>
    </main>
    </>
  )
}

export default App