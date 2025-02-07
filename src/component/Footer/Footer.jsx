import React, { useState } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import './Footer.css';


export default function Footer() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (validateEmail(e.target.value)) {
            setError('');
        } else {
            setError('Invalid email address');
        }
    };


    return (
        <div >
            <Container className='footer border-top'>
                <Row className='mt-4 mb-4'>
                    <Col lg={7}>
                        <Row className='justify-content-around justify-content-lg-start'>
                            <Col md={3} sm={4} className='d-flex justify-content-center justify-content-sm-start mb-4 mb-sm-0'>
                                <div className="company">
                                    <div className="heading">
                                        <h6>COMPANY</h6>
                                    </div>
                                    <div className="company-content">
                                        <Nav.Link to='/' as={NavLink} className='d-flex justify-content-center justify-content-sm-start'>FAQ</Nav.Link>
                                        <Nav.Link to='/' as={NavLink} className='d-flex justify-content-center justify-content-sm-start'>About</Nav.Link>
                                        <Nav.Link to='/' as={NavLink} className='d-flex justify-content-center justify-content-sm-start'>Careers</Nav.Link>
                                        <Nav.Link to='/' as={NavLink} className='d-flex justify-content-center justify-content-sm-start'>Blog</Nav.Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={4} className='d-flex justify-content-center justify-content-sm-start mb-4 mb-sm-0'>
                                <div className="company">
                                    <div className="heading">
                                        <h6>HELP & CONTACT</h6>
                                    </div>
                                    <div className="company-content">
                                        <Nav.Link to='/' as={NavLink} className='d-flex justify-content-center justify-content-sm-start align-items-center'><IoHelpBuoyOutline /> Help Center</Nav.Link>
                                        <Nav.Link to='/' as={NavLink} className='d-flex justify-content-center justify-content-sm-start align-items-center'><IoCallOutline />080-4042-4242</Nav.Link>
                                        <Nav.Link to='/' as={NavLink} className='d-flex justify-content-center justify-content-sm-start align-items-center'><CiMail />Mail</Nav.Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} sm={4} className='d-flex justify-content-center justify-content-sm-start mb-4 mb-sm-0'>
                                <div className="company">
                                    <div className="heading">
                                        <h6>MORE FROM US</h6>
                                    </div>
                                    <div className="company-content">
                                        <Nav.Link to='/' as={NavLink} className='d-flex justify-content-center justify-content-sm-start'>Bulk/Party Order</Nav.Link>
                                        <Nav.Link to='/' as={NavLink}className='d-flex justify-content-center justify-content-sm-start'>Cake Order</Nav.Link>
                                        <Nav.Link to='/' as={NavLink}className='d-flex justify-content-center justify-content-sm-start'>FreshClub</Nav.Link>
                                        <Nav.Link to='/' as={NavLink}className='d-flex justify-content-center justify-content-sm-start'>Offers</Nav.Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='mt-3'>

                        </Row>
                    </Col>
                    <Col lg={5}>
                        <Row>
                            <Col className='subscribe mt-3'>
                                <div className="email-heading">
                                    <h4>Subscribe to our droolworthy newsletter</h4>
                                </div>
                                <div className="form">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className=''
                                    />
                                    <button>Subscribe</button>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                                <div className="download-app d-flex mt-5">
                                    <div className="download-google">
                                        <img src='/images/google logo.png'></img>
                                    </div>
                                    <div className="download-apple">
                                        <img src='/images/apple logo.png'></img>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
