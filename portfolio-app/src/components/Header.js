import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => (
    <header>
        <h1>Portfolio</h1>
        {/* <NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go to create page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Go to help page</NavLink> */}

        <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active">contact</NavLink>
    </header>
)

export default Header;