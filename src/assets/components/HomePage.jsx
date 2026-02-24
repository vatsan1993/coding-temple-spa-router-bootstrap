import React from 'react'
import { Container, Carousel, Row, Col } from 'react-bootstrap'

export default function HomePage() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Hi, Welcome to the 🏠 page!</h1>
                    <p>This app will let you see all of the very important face users JSONPlaceholder gives us. </p>

                </Col>
            </Row>

            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src="https://picsum.photos/1200/600?random=1"
                                alt="First slide"
                            />
                            <Carousel.Caption style={{ textShadow: '2px 2px black' }} >
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src="https://picsum.photos/1200/600?random=2"
                                alt="First slide"
                            />
                            <Carousel.Caption style={{ textShadow: '2px 2px black' }} >
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src="https://picsum.photos/1200/600?random=3"
                                alt="First slide"
                            />
                            <Carousel.Caption style={{ textShadow: '2px 2px black' }} >
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

        </Container>

    )
}
