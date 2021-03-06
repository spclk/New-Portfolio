import React from 'react';
import HeaderButton from '../layouts/HeaderButton'

const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = (e) =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not-dark2').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
            x.item(i).classList.toggle("inverse-dark");
        }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

    return (
        <div>
            <div className="Header">
                <h1>I'm Konstantin and I'm ready...</h1>
            <p className="line-1 anim-typewriter">...ready to join your company to impact lives with tech</p>
            <label className="switch">
                <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <HeaderButton id="not-dark" onClick={scrollTo} alt="About Me"/>
            </div>
            
        </div>
    )
    
}

export default Header;