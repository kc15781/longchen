import Carousel from 'react-bootstrap/Carousel'
import {render} from 'react-dom';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'

import '../Stylesheet/Stylesheet_carousel.css'

export const Carousel_component = (props) => {
 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    
    return (
     <Container>
      <Carousel className="mt-5" activeIndex={index} onSelect={handleSelect} interval={10000000}>
          {props.src.map((value, index) => {
            return (         
                <Carousel.Item>
                  <img
                    className="d-block w-100"            
                    src={value} 
                    alt={props.title[index]}
                  />
                  <Carousel.Caption>
                    <h3>{props.title[index]}</h3>
              
                  </Carousel.Caption>
                </Carousel.Item>
                   )
          })}

      </Carousel>
      </Container>
     
    );
  
}

