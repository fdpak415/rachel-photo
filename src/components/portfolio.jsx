import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Pager, Image, Carousel} from 'react-bootstrap';
import CrossfadeImage from 'react-crossfade-image';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import './portfolio.css';

const images = [
  img1,
  img2,
  img3,
  img4
]

export default class Portfolio extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="background">
        <h1 id='h1'>Portfolio</h1>

        <Carousel>
          <Carousel.Item>
            <img responsive src={img1} />
           </Carousel.Item>

          <Carousel.Item>
            <img responsive src={img2} />
          </Carousel.Item>

          <Carousel.Item>
            <img responsive  src={img3} />
            </Carousel.Item>

          <Carousel.Item>
            <img responsive alt="900x500" src={img4} />
            </Carousel.Item>
          </Carousel>
      </div>

    )
  }
}
