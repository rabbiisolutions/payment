import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import backDropHandler from "./events/BackDrop";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import SignUpModal from "./components/SignUpModal";
import Landing from "./components/Landing";
import Facts from "./components/Facts";
import texts from "./constants/texts";

function App() {
  return (
      <Router>
        <NavBar/>
        <main>
          <Landing/>
          <Facts/>
        </main>
        <SideBar/>
        <SignUpModal className="sign-up modal hidden" signUpText={texts.signUp} status="active"/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <Footer/>
      </Router>
  )
}

export default App;
