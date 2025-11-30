import { useEffect, useState } from "react";
import Home from "./pages/Homepage/Homepage.jsx";
import "./App.css";
import Login from "./pages/Homepage/login.jsx";
import Register from "./pages/Homepage/register.jsx";
import TermsCondition from "./pages/Homepage/Term&Condition.jsx";
import AboutUs from "./pages/Homepage/Aboutus.jsx";
import { Route, Routes } from "react-router-dom";
import Membership from "./pages/Homepage/membership.jsx";
import Class from "./pages/Homepage/class.jsx";
import ForgotPassword from "./pages/Homepage/forgotPassword.jsx";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/termscondition" element={<TermsCondition />} />
    <Route path="/membership" element={<Membership />} />
    <Route path="/class" element={<Class />} />
    <Route path="/forgotpassword" element={<ForgotPassword />} />
  </Routes>
  );
}

export default App;
