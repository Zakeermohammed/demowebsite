import React from 'react';
// import Student from './Hello'
// import Hello from './Hello'

// const ChildZak = (Props) =>{
//   return(
//     <React.Fragment>
//       <h1 Zakeer="ZakeerHussain"></h1>
//     </React.Fragment>
//   )
// } 
 
const ParentZak = (Props) => {
  return(
    <div>
      <h1 name="Zakeer" style={{color:"red",textAlign:"center"}}>{Props.Zakeer}Hello Zakeer your are Learning React Props</h1>
      {/* <Hello name="Zakeer" age="26" /> */}
      {/* <Hello/> */} 
      {/* <Student name="zakeer" rollno="24" /> */}
    </div>
  )
}

export default ParentZak