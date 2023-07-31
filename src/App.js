import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Home';
import Users from './Users';
import About from './About';
// import firebase from './firebase';
// import { useEffect } from 'react';
// follow code step by step youtubr chnnel for full tutorial 
// https://www.youtube.com/playlist?list=PL8p2I9GklV44pmaVnDH2-rl_0Mhs5AHW2

function App() {
  // useEffect(()=>{
    // const msg = firebase.messaging()
    // msg.requestPermision().then(()=>{
    //   return msg.getToken();
    // }).then((data)=>{
    //   console.log("token",data);
    // })
  // })
  return (
    <div className="App">
      <Router>
        <Navbar bg="danger" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
             <Link to="/users">Users</Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route Component={About} path='/about'></Route>
          <Route Component={Users} path='/users'></Route>
          <Route Component={Home} path='/'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
