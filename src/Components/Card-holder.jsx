import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import {data} from '../Data/Previews'
import Title from './Title-card';
import Lesson from './Lesson';
import BottomNav from './Bottom-navigation';
import Menu from '../Components/Menu'


export default function CardHolder() {
  
  const [lesson, setLesson] = useState(0);
  const selectLesson = (number) => {
    if (number >= 0 && number <= data.length)
      setLesson(number);
      window.scrollTo(0, 0);
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
                  <Lesson num={lesson}/>
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