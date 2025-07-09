import React from 'react'
import Header from './components/header'
import Home from './pages/Home'
import  './index.css'



const App = () => {
  return (
    <>
    <Header/>
    <main className="scroll-smooth">
        <section id="home"><Home /></section>
    </main>
    </>
  )
}

export default App