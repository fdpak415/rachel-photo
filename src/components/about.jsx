import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, PageHeader, Image } from 'react-bootstrap';
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import './about.css'

export default class About extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <h1 id='h1'>About</h1>

          <Col xs={6} md={4}>
            <Image responsive src={img5} circle />
          </Col>
          <Col xs={6} md={4}>
            <Image responsive src={img6} circle />
          </Col>
          <Col xs={6} md={4}>
            <Image responsive src={img7} circle />
          </Col>

          <p> Marriage is the most important day in a woman's life! After
          experiencing my own wedding, I fully understand the overwhleming
          feelings of wanting to look your best for family, friends, and guests.
          I will never forget the dissapointment I felt after looking at my raw
          wedding photos. The chubby arms, the double chin, looking fatter than
          usual in my dress. I promise to use the powers of digital editing to
          make your wedding photos into refined magical pieces of art.
          Trust me in my never ending pursuit for perfection. Looking forward to
          your perfect wedding!
          </p>
        </Row>
      </Grid>
    )
  }
}
