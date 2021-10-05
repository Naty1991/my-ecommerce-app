import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiceD6} from '@fortawesome/free-solid-svg-icons'





const data = [
    {name: "Edades", id: 1},
    {name: "Juguetes", id: 2},
    {name: "Juegos de mesa", id: 3},
    {name: "Recomendados", id: 4},
    {name: "Sucursales", id: 5},
    {name: "Contacto", id: 6}
] 

const NavBar = () => {

    
    return (
        <div className="div-container">
            <nav className="nav-container">
            
            <h1><span className="p-play">Play</span><span className="r-play">room</span> <span className="dot-play">.</span></h1>
            
            <h1 className="dice-icon"><FontAwesomeIcon icon={faDiceD6}/></h1>
            
            <ul>
               
                { data.map( (data) => (
                    <li key={data.id}>
                    <a href= "/" className="link-nav"><span>{data.name}</span></a>
                </li>
                ))
                }
            </ul>

            <CartWidget />    

        </nav>
        </div>
        
    )
}

export default NavBar
