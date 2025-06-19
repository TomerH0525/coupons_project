import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './components/Layout/Appbar/Appbar'
import Routing from './components/Layout/Navigation/Routing'
import Footer from './components/Layout/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:"flex", flexDirection:"column", height:"100%"}}>
        <nav>
          <Appbar />
        </nav>

        <main style={{flexGrow:"1"}}>
          <Routing />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
