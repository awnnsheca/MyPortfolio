import {useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import navIcon1 from '../Components/assets/img/nav-icon1.svg';
import navIcon2 from '../Components/assets/img/nav-icon2.svg';
import navIcon3 from '../Components/assets/img/nav-icon3.svg';
import navIcon4 from '../Components/assets/img/nav-icon4.svg';


export const Footer =() => {
return (
    <footer className='footer'>
        <Container>
            <Row className = "align-items-center">
          
          <Col size={12} sm={6}>
          <p>Feel free to Connect</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/anshika-sharma-1b8b54235/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/Awnnsheca"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/awnnsheca/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/awnnshikaa"><img src={navIcon4} alt="Icon" /></a>
             
            </div>
            </Col>
            </Row>
        </Container>
    </footer>
)
    
}