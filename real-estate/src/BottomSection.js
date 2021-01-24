import React from 'react';
import './BottomSection.css';
import {Container, Row, Col} from 'react-bootstrap';
import Area1 from './images/area1.jpg';
import Area2 from './images/area2.jpg';
import Area3 from './images/area3.jpg';
import Area4 from './images/area4.jpg';
import Area5 from './images/area5.jpg';
import Area6 from './images/area6.jpg';
import Area7 from './images/area7.jpg';
import Area8 from './images/area8.jpg';
import Area9 from './images/area9.jpg';
import Area10 from './images/area10.jpg';
import Area11 from './images/area11.jpg';
import Mission from './images/mission.png';
import MissionBack from './images/mission-back.jpg';


const BottomSection = () => {
  

  return (
    <section className='bottom-container'>
      <Container fluid={true}>
        <Row className='rows'>
          <Col className='columns' sm>
            <div className='bottom-properties one'>
            <div className='area-holder'>
            <img className='mid-agent' src={Area1} alt='realestate agent' />
            <p>ATLANTA</p>
            </div>
            <div className='area-holder'>
            <img className='mid-agent' src={Area2} alt='realestate agent' />
            <p>ATLANTA</p>
            </div>
            </div>
          </Col>
          <Col className='columns' sm>
            <div className='bottom-properties two'>
              <div className='area-holder'>
            <img className='mid-agent' src={Area3} alt='realestate agent' />
            <p>ATLANTA</p>
            </div>
            <div className='area-holder'>
            <img className='mid-agent' src={Area4} alt='realestate agent' />
            <p>ATLANTA</p>
            </div>
            </div>
          </Col>
          <Col className='columns' sm>
            <div className='bottom-properties three'>
              <div className='area-holder'>
            <img className='mid-agent' src={Area5} alt='realestate agent' />
            <p>ATLANTA</p>
            </div>
            <div className='area-holder'>
            <img className='mid-agent' src={Area6} alt='realestate agent' />
            <p>ATLANTA</p>
            </div>
            </div>
          </Col>
        </Row>
        <Row>
    <Col sm>
    <div className='bottom-area-holder side'>
            <img className='mid-agent' src={Area7} alt='realestate agent' />
            <p>ATLANTA</p>
    </div>
      
    </Col>
    <Col sm>
    <div className='bottom-area-holder mid'>
            <img className='mid-agent' src={Area8} alt='realestate agent' />
            <p>ATLANTA</p>
    </div>
     
    </Col>
    <Col sm>
      <div className='bottom-area-holder mid'>
            <img className='mid-agent' src={Area9} alt='realestate agent' />
            <p>ATLANTA</p>
    </div>

    </Col>
    <Col sm>
      <div className='bottom-area-holder mid'>
            <img className='mid-agent' src={Area10} alt='realestate agent' />
            <p>ATLANTA</p>
    </div>

    </Col>
    <Col sm>
      <div className='bottom-area-holder side'>
            <img className='mid-agent' src={Area11} alt='realestate agent' />
            <p>ATLANTA</p>
    </div>

    </Col>

  </Row>
  <section className='mission-container'>
  <div className='mission-flex'>
  <img className='mission-background' src={MissionBack} alt='mission logo' />
  <div className='mission'>
    <div className="mission-logo-container" >
     
        <img className='mission-logo' src={Mission} alt='mission logo' />
     
    </div>
  </div>
  </div>
  </section>
    </Container>
   </section>
  )
}

export default BottomSection;