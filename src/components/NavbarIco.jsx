import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import icon from '../assets/img/pokemonIcon.png'

const NavbarIco = () => {
  const setisActive = ({ isActive }) => (isActive ? "active" : undefined);
  return (

       
      
    <Navbar bg= 'dark' expand="lg" >
      <Container >
          <Navbar.Brand href="#home">
            <img
              src={icon}
              width="40"
              height="50"
              className="d-inline-block align-top iconpika"
              alt="poke logo"
            />
          </Navbar.Brand>
      <div className="link"> 
      <div className="linkHome">
      <NavLink  className= {setisActive} to="/">
        Home
      </NavLink>
      </div>
      <div>
      <NavLink className={setisActive} to="/pokemones">
        Pokemones
      </NavLink>
      </div>
      </div>
      </Container>
      </Navbar>
      
  );
};

export default NavbarIco;
