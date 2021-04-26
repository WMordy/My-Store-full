import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
      <div className = "container-fluid">
        <div className = "row">
          <div className = "col-lg-2 col-sm-12 text-center nav-holder">
          <Nav/>
          </div>
          <div className = "col-lg-10 col-sm-12">
            <Editor/>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default App;
