import React ,{} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import GenderPage from './pages/GenderPage/GenderPage';
import ProductFull from './pages/ProductPage/ProductFull';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    
        <Switch>
        
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route exact path="/:gender" component={GenderPage} />
          <Route exact path="/product/:id" component={ProductFull} />
         
          
        </Switch>
      
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
