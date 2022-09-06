import React from 'react';
import "./welcome.scss";


const Welcome = (props) => {

  /* destructiring of object */  
  const {firstName, lastName} = props;


  return (
    <h1 className='welcomeh1'>Welcome {firstName} {lastName}</h1>
  )
}

export default Welcome