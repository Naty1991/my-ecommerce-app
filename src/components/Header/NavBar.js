import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget.js'




const data = [
    {name: "Nuestros platos", id: 1},
    {name: "Nuestros postres", id: 2},
    {name: "Bebidas", id: 3},
    {name: "Recomendados", id: 4},
    {name: "Nosotros", id: 5},
    {name: "Contacto", id: 6}
] 

const NavBar = () => {

    
    return (
        <div className="div-container">
            <nav className="nav-container">
            
            <h1>Lo de Acevedo.</h1>
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
