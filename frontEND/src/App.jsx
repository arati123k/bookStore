// import Course from "./component/Course";

import AboutPage from "./component/About";
import ContactPage from "./component/contact";
import Signup from "./component/signup";
import Courses from "./Courses/Courses";
import Home from "./Home/home";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}
