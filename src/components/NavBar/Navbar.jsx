import React, { useState, createContext } from 'react';
import './Navbar.css';
import { Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import About from '../About/About';
import Logout from '../Logout/Logout';

export const GlobalInfo = createContext();

export default function Navbar() {
    const [bodyColor, setBodyColor] = useState('green');
    const [bgColor, setbgColor] = useState('grey');

    const navigate = useNavigate();

    const okay = () => {
        console.log("Cancel clicked");
    }

    const what = () => {
        console.log("Logout clicked");
        navigate('/');
    }

    return (
        <>
            <GlobalInfo.Provider value={{ appColor: bodyColor, bodyColor: bgColor }}>
                <div className="navbar">
                    <Link to="/">Home Page</Link>
                    <Link to="/about">About Page</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                <Routes>
                    <Route path='/' exact element={<Homepage />} />
                    <Route path='/about' element={<About />} />
                    <Route path="/logout" element={<Logout handleCancel={okay} handleLogout={what} />} />
                </Routes>
            </GlobalInfo.Provider>
        </>
    )
}
