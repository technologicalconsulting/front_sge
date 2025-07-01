import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarContainer = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <div className="card-header">
            <h5 className="card-title">Calendar</h5>
          </div>
          
          <Calendar 
            onChange={onChange} 
            value={value} 
          />
        </div>
      </div>
    </>
  )
}

export default CalendarContainer;
