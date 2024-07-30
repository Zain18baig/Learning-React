//print list  useing array map function
/*const App = () => { 
  let arr=  ["user 1","user 2","user 1","user 1","user 1",];
  return (
    <div>
      {arr.map((user)=>{
        return user
      })}
    </div>
  )
}
export default App*/

import { useRef, useState } from "react";
import FirstComponent from "./components/FirstComponent";

//Conditional rendering
/*const App = () => {
  let data = "Boy"; 
  return (
    <div>
      {data==="Boy"? <h1>Boy</h1>:<h1>Girls</h1>}
    </div>
  )
}
export default App*/


//Event Handling
/*const App = () => {
  let x = 0;
  const btnClick =  () => {
   console.log("Clicked",x);
   x++;
  }
  return (
    <div>
      {x}
      <button onClick={()=>{btnClick()}}>Click me</button>
    </div>
  )
}
export default App*/


// Use estate Hook
// We use useState to manage an array of data items.

/*const App = () => {
  const[x, setx] = useState(0);
  const btnClick =  () => {
   console.log("Clicked",x);
  setx(x+1);
  }
  return (
    <div>
      {x}
      <button onClick={()=>{btnClick()}}>Click me</button>
    </div>
  )
}
export default App*/

//Passing Props

/*const App = () => {
  const[x, setx] = useState(0);
  const btnClick =  () => {
   console.log("Clicked",x);
  setx(x+1);
  }
  return (
    <div>
      <button onClick={()=>{btnClick()}}>Click me</button>
      <FirstComponent data = {x} fn = {setx}/>
    </div>
  )
}
export default App*/

// use ref
//We use useRef to create a reference to an input field.
const App = () => {
const [data,setData] = useState([]);
const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={()=>{setData([...data,inputRef.current.value])}}>submit</button>
      {data.map((item,index)=>{
        return <h2 key={index}>{item}</h2>
      })}
    </div>
  )
}
export default App









  