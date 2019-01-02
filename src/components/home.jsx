import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, PageHeader } from 'react-bootstrap';
import CrossfadeImage from 'react-crossfade-image';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import './home.css';

const images = [
  img1,
  img2,
  img3,
  img4
]

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage() {
    if (this.state.imageIndex === images.length - 1) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
  }

  componentDidMount() {
    setInterval(this.changeImage, 4000)
  }

  render() {
    return (
      <div id="background">
        <CrossfadeImage
         src={images[this.state.imageIndex]}
         duration={2000}
         timingFunction={"ease-out"}
       />

        <button onClick={this.changeImage}>
          Change Image
        </button>
      </div>
    )
  }
}


// <Jumbotron>
//
// </Jumbotron>
// <Link to="/about">
//   <Button bsStyle="primary">About</Button>
// </Link>
