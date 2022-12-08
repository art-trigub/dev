// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Testnet from './components/Testnets/Testnet'
import Node from './components/Node/Node'
import Amba from './components/Amba/Amba'
import Project from './components/Custom/Project'
import SwipeToSlide from './components/HomeContent';
import React, { Component, useState, useEffect, useRef  } from "react";
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Home } from '@mui/icons-material';
import BasicBreadcrumbs from "./components/Custom/Breadcrumbs";

function App() {
  const [widthScreen, setWidthScreen] = React.useState()
  console.log(widthScreen)

  useEffect(() => {
    setWidthScreen(document.outerWidth)
}, []);
  console.log(widthScreen)
  let elem = document.querySelector("body")
  // let [widthWindow, setWidthWindow] = useState(0)
  // let widthWindow2 = document.outerWidth;
  // setWidthWindow(widthWindow2)
  // console.log(widthWindow)


  return (
    <div className="App" id='app_id'>
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
                {/* <SwipeToSlide widthWindow={widthWindow}/> */}
                <SwipeToSlide widthScreen={widthScreen}/>

              </Route>
        </Switch>
      </div>  
        <Footer />
      </Router>
    </div>
  );
}


export default App;
