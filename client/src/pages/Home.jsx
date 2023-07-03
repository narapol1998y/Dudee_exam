import Navbar from "../components/Home/Navbar"
import Hero from "../components/Home/Hero"
import Content from "../components/Home/Content"
import Footer from "../components/Home/Footer"
import { useState } from 'react';
const Home = () =>{
    const [theme, setTheme] = useState('pastel');

    const handleThemeToggle = (event) => {
      const newTheme = event.target.checked ? 'wireframe' : 'pastel';
      setTheme(newTheme);
    };
    return(
        <div data-theme={theme}>
        <Navbar onThemeToggle={handleThemeToggle} />
        <Hero/>
        <h1>Hellow </h1>
        <Content/>
        <Footer/>
        </div>
    )
}

export default Home