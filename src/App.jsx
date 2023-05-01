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
  });

  const products = [
    { text: "Producto XYZzz", price: "60", link: "#" },
    { text: "Producto XYZzz", price: "60", link: "#" },
    { text: "Producto XYZzz", price: "60", link: "#" },
    { text: "Producto XYZzz", price: "60", link: "#" },
    { text: "Producto XYZzz", price: "60", link: "#" },
    { text: "Producto XYZzz", price: "60", link: "#" }
  ]

  return (
    <>
      <Navbar {...navButton} />
      <Banner />

      <main className="container" >
        <ProductGallery title="Star Wars" link="#" products={ products } />
        <ProductGallery title="Consolas" link="#" products={ products } />
        <ProductGallery title="Diversos" link="#" products={ products } />
      </main>

      <br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default App
