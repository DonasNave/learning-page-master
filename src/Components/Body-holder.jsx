import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import {data} from '../Data/Previews'
import Title from './Title-card';
import Lesson from './Lesson';
import BottomNav from './Bottom-navigation';
import Menu from './Menu'


export default function CardHolder() {
  const [accord, setAccord] = useState(-1);
  const [lesson, setLesson] = useState(0);
  const selectLesson = (number) => {
    if (number >= 0 && number <= data.length){    
      setAccord(-1);
      setLesson(number);
      window.scrollTo(0, 0);
    }
  }

  const setAccordion = (number) => {
    if (number === accord){
      setAccord(-1);
    }
    else{
      setAccord(number);
    }
  }

  let content;

  if (lesson === 0){
    content = <Container style={{ marginTop: 20, marginBottom: 20 }}>
                <Row xs={10} md={2} lg={3} className="g-4">
                  {data.map(title => (
                    <Title key={title.id} data={title} lessonCal={selectLesson}/>
                  ))}  
                </Row>      
              </Container>}
  else{
    content =  <Container className='lesson-page' >          
                <Row className="page-content">
                  <Lesson lessonData={data.at(lesson - 1)} accordSetter={setAccordion} accordItem={accord}/>
                </Row>
                <Row className="bottom-nav"> 
                  <BottomNav number={lesson} lessonCal={selectLesson} lessons={data}/>
                </Row>
              </Container>
  }

  return (
      <div>
        <Menu lessonCal={selectLesson}/>
        {content}
      </div>
    ); 
}