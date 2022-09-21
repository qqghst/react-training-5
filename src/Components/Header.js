import React, { Component } from 'react';
import { FormControl, Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import logo from './apple.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Blog from '../Pages/Blog';
export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar  sticky='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='32'
                                weight='32'
                                className='d-inline block align-top'
                                alt='logo'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsise-navbar-nav' />
                        <Navbar.Collapse id='responsise-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/about'>About</Nav.Link>
                                <Nav.Link href='/contact'>Contact</Nav.Link>
                                <Nav.Link href='/blog'>Blog</Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='me-2'
                                />
                                <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/blog' element={<Blog />} />
                    </Routes>
                </Router>
            </>
        )
    }
}
