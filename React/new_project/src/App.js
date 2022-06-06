import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
 
  // const names =["Aniket","Tejas","Ganesh","Bhavna"];
  const student=[
    {name:"Aniket" ,
    pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Discord.jpg"
  },
   
   {name:"Tejas" ,
   pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Picture-Download.jpg"
},
   
  {name:"Vijay", 
   pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-DP.jpg"
},
{name:"Bhavna", 
pic:"https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg"
}
  ]
 return (
 <div className="App">
   {/* <Message
    name="Aniket" 
    pic="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Discord.jpg"
    />
   <Message 
   name="Tejas" 
   pic="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Picture-Download.jpg"
   />
   <Message 
   name="Vijay" 
   pic="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-DP.jpg"
   />
    */}
    {/* {names.map(nm=><Welcome name={nm}/>)} */}
    {student.map((student)=>(
      <Message name={student.name} pic={student.pic}/>
    ))}
 </div>
 ); 
}

function Welcome(props){
  console.log(props);
 return( 
   <div>
 <h1>Hello,{props.name}😎☠️</h1>
 </div>
 );
}  
//defining the component = Logic + view
 function Message(props){
   console.log(props);
  return( 
    <div>
  <img className="profile-pic"
   src={props.pic}/>
  <h1>Hello,{props.name}🤩🎶❤️</h1>
  </div>
  );
 }  

export default App;

// Hook-make react listen to the changes(It's a function)

