import { useState } from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';


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
    </>
  )
}

export default App
