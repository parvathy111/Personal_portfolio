import React from 'react'
import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About'
import  './index.css'



const App = () => {
  return (
    <>
    <Header/>
    <main className="scroll-smooth">
        <section id="home"><Home /></section>
        <section id="about"><About/></section>
    </main>
    </>
  )
}

export default App