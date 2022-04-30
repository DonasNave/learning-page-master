import React from 'react';
import { Button, Card } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


const TCard = ({ data, lessonCal }) => (
  <Col key={data.id}>
    <Card className="justify-content-md-center preview-card">
      <Card.Header></Card.Header>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + data.image} style={{maxHeight:'30vh', objectFit: 'cover'}}/>
      <Card.Body>
        <Card.Title className='std-shadow2'>
          {data.title}
        </Card.Title>
        <Button onClick={() => lessonCal(data.id)} variant="primary" className='preview-btn'><FontAwesomeIcon icon={faArrowCircleRight} /></Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted" style={{borderColor: data.section[1]}}>{data.section[0]}</small>
      </Card.Footer>
    </Card>
  </Col>
)

export default TCard;