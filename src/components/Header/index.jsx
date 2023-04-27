import {  DropdownToggle, 
    DropdownMenu, 
    DropdownItem, 
    UncontrolledDropdown,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Button,
    Collapse,} from 'reactstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/style.css'
import thyroid from '../../assets/thyroid.png'
import { func } from 'prop-types';
import { useEffect } from 'react';

function Header () {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const toggleNavBar = () => setNavOpen((prevState) => !prevState);

    return (
    <header>
        <Navbar className='navbar navbar-expand-lg navbar-light bg-light'>
            <NavbarBrand>
               <a href={'/'}><img className="brand-img" src={thyroid} /></a>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavBar}>
                <span className="navbar-toggler-icon"></span>
            </NavbarToggler>
                <Collapse isOpen={navOpen} navbar>
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Lexique</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Hyperthyroïdie</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Hypothyroïdie</a>
                    </li>
                    <li class="nav-item dropdown">
                        <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
                            <DropdownToggle className="nav-link" tag="a" caret>
                            Blog
                            </DropdownToggle>
                            <DropdownMenu  >
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another action</DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </Collapse>
    
        </Navbar>
    </header>

    )
}

export default Header