import {Container,Nav,Navbar} from "react-bootstrap";
import logo from "../Components/assets/img/logo.png";
import { useState, useEffect } from "react";
import navIcon1 from '../Components/assets/img/nav-icon1.svg';
import navIcon2 from '../Components/assets/img/nav-icon2.svg';
import navIcon3 from '../Components/assets/img/nav-icon3.svg';
import navIcon4 from '../Components/assets/img/nav-icon4.svg';
import { HashLink } from 'react-router-hash-link';




import {
  BrowserRouter as Router
} from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";





export const NavBar = () => {
  const[activeLink,setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}


    return (
     <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand>
            <img src= {logo} alt = "logo" />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
           <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className = {activeLink ==='home'? 'active navbar-link' :'navbar-link'} onClick ={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#tech_stack" className = {activeLink ==='tech_stack'? 'active navbar-link' :'navbar-link'} onClick ={()=> onUpdateActiveLink('tech_stack')}>Tech Stack</Nav.Link>
              <Nav.Link href="#projects" className = {activeLink ==='projects'? 'active navbar-link' :'navbar-link'} onClick ={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#blog" className = {activeLink ==='blog'? 'active navbar-link' :'navbar-link'} onClick ={()=> onUpdateActiveLink('blog')}>Blog</Nav.Link>
            
              </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/anshika-sharma-1b8b54235/"><img src = {navIcon1} alt="linkedIn" /></a>
                <a href="https://twitter.com/Awnnsheca"><img src = {navIcon2} alt="twitter" /></a>
                <a href="https://www.instagram.com/awnnsheca/"><img src = {navIcon3} alt="instagram" /></a>
                <a href="https://github.com/awnnshikaa"><img src = {navIcon4} alt="github" /></a>
              </div>
          {/*  <button onClick = {() => console.log('connnect')}>Let's connect <ArrowRightCircle size ={25} /></button>   */}
            </span>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Router>
     
    );
  };

