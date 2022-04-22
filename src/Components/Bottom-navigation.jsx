import React from 'react';
import { Pagination } from 'react-bootstrap';

const BottomNav = ({lessonCal, number, lessons}) => {    
    return (
        <Pagination className="justify-content-md-center">
            {lessons.map(title => (
                <Pagination.Item onClick={(event) => lessonCal(parseInt(event.target.text,10))
                } key={title.id} active={number === title.id}>{title.id}</Pagination.Item>
            ))}
        </Pagination>
    )
}

export default BottomNav;