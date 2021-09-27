import React from 'react';
import logo from '../../Image/YouTube-Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
              <section>
                <div className="container">
                    <div className="logo">
                    <img src={logo} alt="" />
                    </div>
                    <div className="nav-design">
                        <nav>
                        <a href="/Home">Home</a>
                        <a href="/About ">About-Us</a>
                        <a href="/Countuct">Countuct-Us</a>
                        <a href="/Youtuber">  Youtuber</a>
                        </nav>
                    </div>
                </div>
              </section>

              <section className="banner">
                  <div className="banner-color">  
                        <h1>Total Budget : 300 Milion </h1>
                  </div>
              </section>


        </div>
        
        
    );
};

export default Header;