// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Testnet from './components/Testnets/Testnet'
import Node from './components/Node/Node'
import Amba from './components/Amba/Amba'
import Project from './components/custom/Project'
import SwipeToSlide from './components/HomeContent';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Home } from '@mui/icons-material';
import BasicBreadcrumbs from "./components/custom/Breadcrumbs";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <div className='content_container'>
      <BasicBreadcrumbs />
        <Switch>
              <Route path="/testnet">
                <Testnet />
              </Route>
              <Route path="/amba">
                <Amba />
              </Route>
              <Route path="/node">
                <Node />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
              <Route path="/">
                <SwipeToSlide />
              </Route>
        </Switch>
      </div>  
        <Footer />
      </Router>
    </div>
  );
}


export default App;
