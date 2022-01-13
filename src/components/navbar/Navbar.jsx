import React from 'react';
import { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => {
    return (
        <div className="gpt3__navbar-links_container">
        <p><a href="#home" ></a>Home</p>
        <p><a href="#wgpt3" ></a>What is GPT3?</p>
        <p><a href="#possibility" ></a>Open AI</p>
        <p><a href="#features" ></a>Case Studies</p>
        <p><a href="#blog" ></a>Library</p>
        </div>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <Menu />
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center"> 
                        <div className="gpt3__navbar-menu_container-links">
                            <p><a href="#home" ></a>Home</p>
                            <p><a href="#wgpt3" ></a>What is GPT3?</p>
                            <p><a href="#possibility" ></a>Open AI</p>
                            <p><a href="#features" ></a>Case Studies</p>
                            <p><a href="#blog" ></a>Library</p>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign In</p>
                                <button type="button">Sign Up</button>
                            </div>
                        </div>
                    </div> 
                )}
            </div>
        </div>
    )
}

export default Navbar