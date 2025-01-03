import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminModule from "./components/AdminModule";
import UserModule from "./components/UserModule";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Admin Module</Link></li>
            <li><Link to="/user">User Module</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AdminModule />} />
          <Route path="/user" element={<UserModule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

