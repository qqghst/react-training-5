import React, { Component } from 'react'
import { Card, CardGroup, Container, Button } from 'react-bootstrap'

export default class AfterHeader extends Component {
  render() {
    return (
        <Container>
            <h2 className='text-center m-4'>Our team</h2>

            <CardGroup className='m-4'>
                <Card bg='warning'>
                    <Card.Img
                        variant='bottom'
                        src='https://cdn-irec.r-99.com/sites/default/files/imagecache/copyright/user-images/481786/CCLEbONVteXLobovQg8Aw.jpg'
                    />
                    <Card.Body>
                        <Card.Title>Ezio Auditore</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                        <Button variant='primary'>About me</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img
                        variant='top'
                        src='https://cdn-irec.r-99.com/sites/default/files/imagecache/copyright/user-images/481786/CCLEbONVteXLobovQg8Aw.jpg'
                    />
                    <Card.Body>
                        <Card.Title>Altair Ibn-La-Ahad</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                        <Button variant='primary'>About me</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img
                        variant='top'
                        src='https://cdn-irec.r-99.com/sites/default/files/imagecache/copyright/user-images/481786/CCLEbONVteXLobovQg8Aw.jpg'
                    />
                    <Card.Body>
                        <Card.Title>Ezio Auditore</Card.Title>
                        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                        <Button variant='primary'>About me</Button>
                    </Card.Body>
                </Card> 
            </CardGroup>
        </Container>
    )
  }
}
