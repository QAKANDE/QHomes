import React, { Component } from 'react';
import {Carousel,Container} from 'react-bootstrap'
class CarouselCom extends Component {
    state = {  }
    render() { 
        return ( 
            <Container className="mt-3">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../assets/interior-decor-1.jfif"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../assets/interior-decor-2.jfif"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../assets/interior-decor-3.jfif"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </Container>
         );
    }
}
 
export default CarouselCom;