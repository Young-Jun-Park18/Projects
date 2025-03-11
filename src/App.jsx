import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* ----------header---------- */}
      <div id = 'header'>
        <div class = "hearderInner">
          <div className = 'logo'>
            DNA
          </div>
          <nav className = 'navBar'>
            <ul className = 'navList'>
              {/*자식 요소로 Professor와 Students가 들어가야함*/}
              <li className = 'navElement'>Members</li>
              <li className = 'navElement'>Research</li>
              <li className = 'navElement'>Projects</li>
              {/*자식 요소로 Journal papers와 conference papers와 Patents가 들어가야함*/}
              <li className = 'navElement'>Publications</li>
              {/*자식 요소로 News와 Photos가 들어가야함*/}
              <li className = 'navElement'>History</li>
            </ul>
          </nav>
        </div>
      </div>
    
    
    
    </>
  )
}

export default App
