import React from 'react'

const Style2 = () => {

    const styleTitle = {
        fontSize: "2rem",
        color: "green",
        fontWeight: "bold",
        textAlign: "center"
    }



  return (
    <>
    <h2 style={styleTitle}>React Loops</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam natus
      nisi dolorem accusamus repellat eaque dolorum modi iusto quidem odio
      repellendus, dolor distinctio dicta adipisci sed velit eveniet totam sit.
    </p>

    <h2 style={{...styleTitle, color:"blue"}}>React Hooks</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam natus
      nisi dolorem accusamus repellat eaque dolorum modi iusto quidem odio
      repellendus, dolor distinctio dicta adipisci sed velit eveniet totam sit.
    </p>
   



    
  </>



  )
}

export default Style2