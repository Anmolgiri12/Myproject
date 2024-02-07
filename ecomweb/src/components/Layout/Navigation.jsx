import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";

function Navigation () {
  return (
<>
       <div className='head'>
        <div className="logo">SHOP <span className='logosp'>hub</span></div>
        <div>
             <ul className='nav_btn'>
                <li><Link className='link_style' to="/"><span className='homesp'>Home</span></Link></li>
                <li> <Link className='link_style' to='/about'>About</Link></li>
                <li> <Link className='link_style' to='/product'>Product</Link></li>
                <li><Link className='link_style' to='/contact'>Contact</Link></li>
             </ul>
        </div>
        <div>
            <ul className='auth'>
                <li><Link className='link_style' to='/login'>Login</Link></li>
                <li><Link className='link_style'  to='/signin'>Signin</Link></li>
                <li><Link className='link_style' to='cart'><span className='cartsp'><BsCart3/></span></Link></li>
            </ul>
        </div>
       </div>
</>  )
}

export default Navigation