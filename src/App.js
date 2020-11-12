import './App.css';
import { React, useState, useEffect } from "react";
import axios from 'axios';
function App() {
  const [data, setData] = useState(0);
useEffect(()=>{

  axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => { setData(res) })
        .catch((e) => console.log(e))
      console.log(data.title)

},[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
