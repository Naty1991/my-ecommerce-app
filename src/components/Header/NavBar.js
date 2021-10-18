import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiceD6} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'








const NavBar = () => {

    
    return (
        <div className="div-container">
            <nav className="nav-container">
            
            <Link to='/' className="link-play"><h1><span className="p-play">Play</span><span className="r-play">room</span> <span className="dot-play">.</span></h1></Link>
            
            <Link to='/'><h1 className="dice-icon"><FontAwesomeIcon icon={faDiceD6}/></h1></Link>
            
            <ul>
               <Link className='link-nav'>Edades</Link>
               <Link className='link-nav' to='/category/category:id'>Juguetes</Link>
               <Link className='link-nav'>Sucursales</Link>
               <Link className='link-nav'>Contacto</Link>
            </ul>

            <CartWidget />    

        </nav>
        </div>
        
    )
}

export default NavBar
