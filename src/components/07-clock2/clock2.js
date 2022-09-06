import React from 'react';
import "./clock2.scss";
import moment from "moment";


const Clock2 = (props) => {

    const dateTime = moment();
    const dateStr = dateTime.format('LL');
    const timeStr = dateTime.format("HH:mm");
    const dayStr = dateTime.format("dddd");

    const hour = dateTime.format("HH");

    let message = "";

    if(hour>=6 && hour<11) {
        message="Morning";
    } else if(hour>=11 && hour<17) {
        message = "Afternoon";
    } else if (hour>=17 && hour<22) {
        message = "Evening";
    } else {
        message = "Night";
    }


    const clockStyle = {
        color: props.textColor,
        backgroundColor: props.bgColor
    }


  return (
    <div className='clock-container' style={clockStyle}>
        <div className='time'>{timeStr}</div>
        <div>
            <div className='date'>{dateStr}</div>
            <div className='day'>{dayStr} {message}</div>
        </div>
    </div>
  )
}

export default Clock2