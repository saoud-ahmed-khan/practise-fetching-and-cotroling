import './App.css';
import { React , useState,useEffect} from "react";
// import axios from 'axios';
function App() {
  const[data,setData]= useState(0);

  // axios.get("https://jsonplaceholder.typicode.com/posts")
  // .then((res)=>{setData(res)})
  // .catch((e)=>console.log(e))
  // console.log(data.title)
    
    useEffect(() => {
      document.title = `You clicked ${data} times`;
    },[data]);
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={()=>{setData(data+1)}} >click</button>
    </div>
  );
}

export default App;
