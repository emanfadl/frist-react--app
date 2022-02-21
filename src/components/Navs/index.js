import React from 'react'
import { Navbar,Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './../../imgs/Logo.png'
import './navs.css'
const Navs = () => {
  return (
    <div>
    <Navbar  expand="lg" dir="rtl">
  <Container>
    <Navbar.Brand href="#home">
    <img src={Logo} alt="logo"
    width="100px" height="80px"
    />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
         <Link to="/" className="Navlink" style={{textDecoration: "none"}} >الرئيسيه </Link>
        <Link to="Offers" className="Navlink"  style={{textDecoration: "none"}}> العروض </Link>
        <Nav.Link >من نحن</Nav.Link>
        <Nav.Link >خدماتنا</Nav.Link>
       <Link to="Certificate" className="Navlink"  style={{textDecoration: "none"}}>شهاداتنا</Link> 
        <Nav.Link >تواصل معنا</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navs
