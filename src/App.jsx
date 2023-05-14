import './App.css'
import Contac from './components/Contac'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Philosophy from './components/Philosophy'
import Work from './components/Work'

function App() {
  

  return (
    
      <div className='font-["sen"] bg-black min-h-screen'>
        <Navbar />
        <Header />
        <Work />
        <Philosophy />
        <Contac />
        <Footer />
        
      </div>
   
  )
}

export default App
