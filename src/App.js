import { useState } from 'react';
import './App.css';
import {dataArray}  from "./dataCollection"

let suggestions = [];

function App() {
  const [showList, setShowList] = useState("");
  const [value, setValue] = useState("");

  const handleComplete = (e) => {
      dataArray.forEach((x) => {
          if(x.substr(0, e.target.value.length).toUpperCase() === e.target.value.toUpperCase()) {
            suggestions.push(x);
            /* console.log(suggestions); */
            setShowList(suggestions.map((x, index) => {
                return <p key={index} onClick={() => setValue(x)}> {x} </p>
            }))
          }

          if(e.target.value === "") {
            setShowList("")
          }
      })
      setValue(e.target.value)
  }

  return (
    <div className="App">
    <h2> Typeahead component </h2>
    <input type="text" value={value} placeholder='Type Something' onChange={handleComplete} />
    <div>
      {showList}
    </div>
    </div>
  );
}

export default App;
