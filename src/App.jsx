import { useState } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';
import { ProductGallery } from './components/ProductGallery';


function App() {
  const [navButton, setNavButton] = useState({
    hrefButton: '#',
    textButton: 'Login',
    stateButton: true,
  })

  return (
    <>
      <Navbar {...navButton} />
      <Banner />

      <main className="container" >
        <ProductGallery title="Star Wars" link="#" />
        <ProductGallery title="Consolas" link="#" />
        <ProductGallery title="Diversos" link="#" />
      </main>

      <br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default App
