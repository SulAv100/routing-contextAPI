import React,{useState} from 'react'
import './Logout.css'

export default function Logout({ handleCancel, handleLogout }) {

  return (
    <>
        <div className="logout-container">
            <p className='logout-text'>Do you really want to log out?</p>
            <div className="logout-button">
                <button id='cancel' onClick={handleCancel}>Cancel</button>
                <button id='logout' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </>
)
}
