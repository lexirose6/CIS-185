import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import list from './List.jsx'
//import Item from './TaskItem.jsx'

function App() {
  const [count, setCount] = useState(0);
  list();

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          <form>
            <label>Tasks</label><br></br>
            <input type="checkbox" id="1"></input>
            <br/>
            <input type="text" id="1"/>
            <list/>
          </form>
          <feildset>
              <legend>Tasks</legend>
          </feildset>
        </div>
       </div>
    </>
  )
}

export default App
