import React from 'react'
import '../styles/HotAccessoriesMenu.css'
import { Link } from 'react-router-dom'
const HotAcessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesLink' to="/music" >Music Store</Link>
        <Link className='HotAccessoriesLink' to="/smartdevices" >Smart Devices</Link>
        <Link className='HotAccessoriesLink' to="/home" >Home</Link>
        <Link className='HotAccessoriesLink' to="/lifestyles" >Lifestyles</Link>
        <Link className='HotAccessoriesLink' to="/mobileaccessories" >Mobile Accessories</Link>
    </div>
  )
}

export default HotAcessoriesMenu
