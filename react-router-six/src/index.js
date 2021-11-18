import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      // In hear we want to a route where hit and redirect to other route
      <Route path="/myClasses" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses/>}/>
        <Route path="bundles" element={<Bundles/>}/>
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All Courses are Listed here</h4>
      <Link className="btn btn-success" to="/learn/courses">Courses</Link>
      {" "}
      <Link className="btn btn-primary" to="/learn/bundles">Bundles</Link>
      <Outlet/>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1>Course List</h1>
      <h4>Course Items</h4>
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles List</h1>
      <h4>Bundles Items</h4>
    </div>
  );
}

reportWebVitals();
