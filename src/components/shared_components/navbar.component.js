﻿import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage} from 'react-intl';
import { Navbar, Nav } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';


import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { Animated } from "react-animated-css";


import '../Stylesheet/Stylesheet_nav.css'


const Animation_logo = () => {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 }
    });
    return <div>
        <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
            <animated.div style={fade}>
                <Image src="./logo/logo.png" className="logo" fluid/>
            </animated.div>
        </Animated>
    </div>
}





const Animation_company = () => {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 }
    });
    return <animated.div style={fade}>Longchen Technology</animated.div>
}





export const NavBar = (props) => {

    


    return (
        <div>
            
        <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark"  className="bg_color1" >
                <Navbar className="nav_heading" href="/"><Animation_company /></Navbar>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav><Link to="/" className="nav-link">< FormattedMessage id="nav_Home" defaultMessage="Home" /></Link></Nav>
                    <Nav><Link to="/Products" className="nav-link">< FormattedMessage id="nav_Products" defaultMessage="Products" /></Link></Nav>
                    <Nav><Link to="/Employment" className="nav-link">< FormattedMessage id="nav_Employment" defaultMessage="Employment" /></Link></Nav>
                    <Nav><Link to="#" className="nav-link">< FormattedMessage id="nav_Contact" defaultMessage="Contact" /></Link></Nav>
                    <Nav><Link to="#" className="nav-link">< FormattedMessage id="nav_Catalogue" defaultMessage="Catalogue" /></Link></Nav>
                </Nav>
                <Nav>
                    <Nav className="nav-link"></Nav>
                    <Nav><Link to="#" onClick={() => props.change_locale("en")} className="nav-link">< FormattedMessage id="nav_Lang" defaultMessage="English" /></Link></Nav>
                    <Nav><Link to="#" onClick={() => props.change_locale("zh")} className="nav-link">< FormattedMessage id="nav_Lang" defaultMessage="中文" /></Link></Nav>
                    <Nav><Link to="#" onClick={() => props.change_locale("th")} className="nav-link">< FormattedMessage id="nav_Lang" defaultMessage="ภาษาไทย" /></Link></Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>




        <Container  style={{
            backgroundImage: "url(/pictures/intro3_opacity_0.5.jpg)", backgroundSize: 'cover',
             marginTop:"100px"
        }}>


            <Row className="text-center justify-content-center align-items-center" style={{ height: '500px' }}>
                <Col>
                        <Row ><Col><Animation_logo /></Col></Row>

                        <Row>
                        
                            <Col style={{ fontSize: '40px', fontWeight: 'bold', marginTop: '20px' }}>< FormattedMessage id="Company" defaultMessage="Longchen Technology" />
                            </Col>
                          
                        </Row>
                </Col>
            </Row>


        </Container>    

        
        </div>

    );
}

    