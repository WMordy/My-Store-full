import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Editor from './components/Editor';
import { useEffect, useState } from 'react';

function App() {
  var [sections, setsections] = useState([])
  const [owner, setowner] = useState({pageID:"",section:""})
  /* useEffect(() => {
    fetch('http://localhost:020699/api/v1/sections')
  .then(response => response.json())
  .then(data => setsections(data));

  }, []) */
  return (
    <div className="App">
      <div className = "container-fluid">
        <div className = "row">
          <div className = "col-lg-2 col-sm-12 text-center nav-holder">
          <Nav sectionsList = {sections} changeOwner = {setowner}/>
          </div>
          <div className = "col-lg-10 col-sm-12">
            <Editor owner = {owner} />
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default App;
