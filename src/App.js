import logo from "./logo.svg";
import "./App.css";
import "./firebase/config";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
// import Header from "./Header";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <div className="App">
        <div className="ui grid container">
          <Routes>
            <Route exact path="/signup" component={Signup} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
