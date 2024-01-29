import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home }  from './pages/home/index';

import { Login } from "./pages/login/index";

import { Feed } from "./pages/feed/index";

import { SignUp } from "./pages/sign-up/index"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/feed" element={ <Feed /> } />
        <Route path="/sign-up" element={ <SignUp /> } />
      </Routes>
    </Router>
  );
}

export default App;
