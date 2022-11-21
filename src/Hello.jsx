import React from 'react';


<Hello />
{/* <Hello name="syed" />
<Hello name="Hussain"/> */}

function Hello(Props){
    return(
        <>
            <div>Hello Zakeer How are you: {Props.name}</div>
            {/* <ChildHelo /> */}
        </>
    )
}


function ChildHelo(Props){
    return(
        <>
            <h1 name="Hussain"></h1>
        </>
    )
}
 
export default Hello

//   const Hello = ({name,age}) =>{
//     return(
//         <>
//              <p>Name: {name} </p>
//              <p>Age: {age}</p>
//         </>
//     )
// }


// export default class FirstObject extends Component{
//     constructor(){
//         super();
         
//     }
// }
 

// export default Hello;

/*
class Student extends React.Component{
    render(zak){
        return(
            <div>
                <h3>Class RollNo: {this.rollno}</h3>
                <h5>class Student_id: {this.student_id}</h5>
                <Hello />
            </div>
        )
    }
}

export default Student;
*/