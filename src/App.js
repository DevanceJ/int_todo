import './App.css';

import {useState, useEffect} from 'react'
// const data = {
//   "createdAt": "2023-05-18T01:57:04.677Z",
//   "title": "title 1",
//   "id": "1"
// }

function App() {
  const [data, setData] = useState('');
  const [text,setText] = useState('');
  
  // axios.get('https://646587c9228bd07b354c86ae.mockapi.io/api/v1/todos')
  // .then((res)=> {
  //   // handle success
  //   console.log(res);
    
  // })
  // .catch((error) => {
  //   // handle error
  //   console.error(error);
  // })
  // // .finally(function () {
  // //   // always executed
  // // });
  useEffect(()=>{
    async function logJSONData() {
      const response = await fetch('https://646587c9228bd07b354c86ae.mockapi.io/api/v1/todos');
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    }
    logJSONData();
  },[])

  
  const handleSubmit = () =>{
      if (text !== '') {
        setData([...data,{title:text}]);
        setText('');
      }
  }
  const handleDelete = (id) =>{
    
    const updatedNames = [...data];
    updatedNames.splice(id, 1);
    setData(updatedNames);
    }
  return (
    <>
    <div className="nav">
      <h2>To do</h2>
    </div>
    <div className="main">
      <div className="mainLeft">
        <ul>
          <li>My day</li>
          <li>Important</li>
          <li>Planned</li>
          <li>Assigned to me</li>
        </ul>
      </div>
      <div className="mainRight">

        <input type="text" value={text} onChange={(e)=>{
          setText(e.target.value)
        }}/>
        <button onClick={handleSubmit} >Add</button>

        
      <ul >
        { Array.isArray(data) && data.map((item,index)=>{
          return <><li key={index} value={item.id}>{item.title}</li><button onClick={()=>handleDelete(index)}>Delete</button></> 
        })}
      </ul>
        </div>
    </div>
    </>
  );
}

export default App;
