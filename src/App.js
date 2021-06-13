import { log } from 'async';
import React,{useContext, useState,useEffect} from 'react';

import { myContext } from './Context';

const App=()=>{

  const dataFromContext=useContext(myContext);
  const [data,setData]=useState(dataFromContext);
  useEffect(()=>{
    console.log("useEffect work component mount");
  },[]);  //[] this is dependency object
  //[] In this object you can give state that means when state is changes
  //useEffect also called
  const someWork=(e)=>{
    e.preventDefault();
    console.log("your some work");
    console.log(e);
  }
  return(
    <div>
      <h1>hello, {data.name}</h1>
      {
        // event onClick,onSubmit,onChange
      }
      <button onClick={(e)=>{someWork(e)}}>Click</button>
    </div>
  );
}
export default App;