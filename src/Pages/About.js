import React, { Component } from 'react'
import { Container, Nav } from 'react-bootstrap'
import {Tab, Row, Col} from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey='second'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Leonardo da vinci</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Van gogh</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Salvador Dali</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>Micelangelo</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='first'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Leonardo_da_Vinci_%28attrib%29-_la_Belle_Ferroniere.jpg/1024px-Leonardo_da_Vinci_%28attrib%29-_la_Belle_Ferroniere.jpg'
                                    className='d-block w-100 h-100'></img>
                                </Tab.Pane>

                                <Tab.Pane eventKey='second'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/2560px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
                                    className='d-block w-100 h-100'></img>
                                </Tab.Pane>

                                <Tab.Pane eventKey='third'>
                                    <img src='https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg'
                                    className='d-block w-100 h-100'></img>
                                </Tab.Pane>

                                <Tab.Pane eventKey='fourth'>
                                    <img src='https://www.theartstory.org/images20/works/michelangelo_5.jpg'
                                    className='d-block w-100 h-100'></img>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
