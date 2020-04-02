import Carousel from 'react-bootstrap/Carousel'
import {render} from 'react-dom';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'



export const Carousel_component = (props) => {
 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Container >
      <Carousel className="mt-5" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img

          
            className="d-block w-100"
            
            src="./pictures/product_img/SupaMop I/rectangular.jpg"
            alt="First slide"
          
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/pictures/product_img/cloth/Optimized-3_new.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/pictures/product_img/cloth/Optimized-5_new.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
    );
  
}

