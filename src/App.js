import React from "react"
import AccRegister from "./Account/AccRegister";

import './App.css';
import MiniDrawer from "./Layouts/Sidebar";
import Sidebardaa from "./Layouts/Sidebardaa";
import CustomizedList from "./Layouts/Sidebardaa";
import Routes from "./Routes";

function App() {
  return (
    <div className="App" style={{backgroundColor:"#edeff1"}}>
      {/* <MiniDrawer/> */}
      {/* <CustomizedList/> */}
      {/* <Sidebardaa/> */}
      {/* <AccRegister/> */}
      <Routes/>
    </div>
  );
}

export default App;
