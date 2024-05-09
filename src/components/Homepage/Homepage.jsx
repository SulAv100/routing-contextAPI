import React,{useContext, useState} from 'react'
import './Homepage.css'
import { GlobalInfo} from '.././NavBar/Navbar'
export default function Homepage() {

    const {appColor,bodyColor} = useContext(GlobalInfo);
    const [color, setColor] = useState(appColor);
    const [back, setBack] = useState(bodyColor);
    

     
  return (
    <>
        <div  style={{backgroundColor: back}} className="home-page">
            <span  style={{color: color}}>This is home page
                
            </span>
        </div>
    </>
)
}
