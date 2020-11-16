import './App.css';
// import { React, useState, useEffect } from "react";
// import axios from 'axios';
import {UsingUseMemo} from "./UsingUseMemo";

function App() {
//   const [data, setData] = useState({});
//   const [id,setId]=useState(1);
// useEffect(()=>{

//   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then((res) => {setData(res.data) })
//         .catch((e) => console.log(e))

// },[id])


  return (
    <div className="App">
      {/* <ul>
      {
        <li>{data.title}</li>
      }
      </ul> 
      <input onChange={(e)=>{setId(e.target.value)}} type='number'/> */}
      <UsingUseMemo/>
       
    </div>
  );
}

export default App;
