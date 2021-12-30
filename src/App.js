import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivatePage from "./components/PrivatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/*" element={<PrivatePage />} />
      </Routes>
    </Router>
  );
}


export default App;
