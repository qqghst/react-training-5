import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SpiderMan from '../assets/spudik.jpeg';
import Uncharted from '../assets/unchik.jpeg';
import Bloodborne from '../assets/bloodik.jpeg';

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={ SpiderMan }
                    alt='SpiderMan'
                />
                <Carousel.Caption>
                    <h3>SPIDER-MAN</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={ Uncharted }
                    alt='Uncharted'
                />
                <Carousel.Caption>
                    <h3>UNCHARTED</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={ Bloodborne }
                    alt='Bloodborne'
                />
                <Carousel.Caption>
                    <h3>BLOODBORNE</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }
}
