import React from 'react'
import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import  './index.css'
import Contact from './pages/Contact'
import Resume from './pages/Resume'




const App = () => {
  return (
    <>
    <Header/>
    <main className="scroll-smooth">
        <section id="home"><Home /></section>
        <section id="about"><About/></section>
        <section id="project"><Project/></section>
        <section id="contact"><Contact/></section>
        <section id="resume"><Resume/></section>
    </main>
    </>
  )
}

export default App