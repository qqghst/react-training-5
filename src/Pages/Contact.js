import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contact extends Component {
    render() {
        return (
            <Container style={{width: 500}}>
                <h1 className='text-center md-2'>Contact us</h1>

                <Form.Group className='mt-2' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter your email address'/>
                    <Form.Text>We'll never share your email with anyone else!</Form.Text>
                </Form.Group>

                <Form.Group className='mt-2' controlId='formBasicPassword'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control as='textarea' rows='3'></Form.Control>
                </Form.Group>

                <Form.Group controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label='Check Me out'></Form.Check>
                </Form.Group>

                <Button className='mt-3' variant='primary' type='submit'>Send!</Button>
            </Container>
        )
    }
}
