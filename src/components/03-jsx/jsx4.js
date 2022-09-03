import React from 'react'

const Jsx4 = () => {

    const age = 13;

  return (
    <div>
   { age>=18 && <h1>The Content for 18 or older</h1> } 
   { age>17 || <h1>The Content for younger than 18</h1> } 

   </div>
  );
};

export default Jsx4;