import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navBar.css';


const NavBar = () => {
  return (
    <header className='navBar'>
        <h1 className='navBar__title'><Link to='/#/homepage' className='navBar__titleLink'>E-commerce</Link></h1>
        <ul className='navBar__list'>
            <li className='navBar__item'><Link to='/login' className='navBar__itemLink'><i class='bx bx-user'></i></Link></li>
            <li className='navBar__item'><Link to='/purchases' className='navBar__itemLink'><i class='bx bx-box'></i></Link></li>
            <li className='navBar__item'><Link to='/cart' className='navBar__itemLink'><i class='bx bx-cart'></i></Link></li>
        </ul>
        </header>
  )
}

export default NavBar;