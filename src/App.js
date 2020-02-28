import React from 'react';
import backDropHandler from "./events/BackDrop";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Facts from "./components/Facts";
import Accordion from "./components/Accordion";
import DesktopView from "./components/Desktop";
import Services from "./components/Services";
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
      <CookiesProvider>
        <NavBar/>
        <main>
          <Landing/>
          <Facts/>
          <Accordion/>
          <DesktopView/>
        </main>
        <SideBar/>
        <Services/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <Footer/>
      </CookiesProvider>
  )
}

export default App;
