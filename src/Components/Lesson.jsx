import React from "react"
import {data} from '../Data/Previews'
import { Col, Row, Accordion, Container } from "react-bootstrap"

export default function Lesson (num) { 
    var lessonData = data.at(num.valueOf().num - 1);

    return (
    <Container className="container-fluid text-center text-md-left">
        <div className="lesson-heading">
            <h5>Lekce {lessonData.id}:</h5>
            <h4 className="text-uppercase std-shadow2">{lessonData.title}</h4>
        </div>
        <hr></hr>
        <Container fluid className="lesson-content">
            <Row style={{ marginTop: 40 }}>
                <Col xs={5} className="left-text task-holder">
                    <Accordion defaultActiveKey={['']} style={{top:"5em", position:"sticky"}}>
                        {lessonData.goals.map(goal => (
                            <Accordion.Item key={lessonData.goals.indexOf(goal) + 1} eventKey={lessonData.goals.indexOf(goal)}>
                            <Accordion.Header>Úloha {lessonData.id}.{lessonData.goals.indexOf(goal) + 1}</Accordion.Header>
                            <Accordion.Body style={{textAlign: 'left', maxHeight:'70vh', overflow:'auto'}}>
                                {goal}
                            </Accordion.Body>
                            </Accordion.Item>
                            ))}
                        <Container className="help-holder">
                            <Row className="legend"><span className="square sq-blue std-shadow1"></span>Teoretická sekce</Row>
                            <Row className="legend"><span className="square sq-green std-shadow1"></span>Praktická sekce</Row>
                        </Container>
                    </Accordion>
                    
                </Col>
                <Col style={{marginLeft: 10}}>
                    {lessonData.theory}
                </Col>
            </Row>
        </Container>
    </Container>)
}