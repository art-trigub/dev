// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Testnet from './components/Testnets/Testnet'
import Node from './components/Node/Node'
import Amba from './components/Amba/Amba'
import SwipeToSlide from './components/HomeContent';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Home } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<SwipeToSlide />}>
          <Route
            path="testnet"
            element={<Testnet />}
          />
          <Route path="tasks" element={<DashboardTasks />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
    </Routes> */}
      <Router>
      <Header />
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
          <Route path="/">
            <SwipeToSlide />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
