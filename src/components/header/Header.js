import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import logo from './logo.png'

function Header() {
  return (
    <div>
        <header class="header">
     
				<nav class="navbar">
					<div class="navbar-header">
						<Link to='/' class="navbar-brand logo">
							<img src={logo} class="img-fluid" alt="Logo"/>
						</Link>
					</div>
						 
					<ul class="nav header-navbar-rht">
					
						<li class="nav-item">
							<a class="nav-link header-login" href="login.html">login / Signup </a>
						</li>
					</ul>
				</nav>
			</header>
    </div>
  )
}

export default Header