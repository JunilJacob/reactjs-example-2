import React from "react";
import { NavLink, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="primary-nav">
      <ul>
        <li><NavLink to="home">Home</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
        <li className="dropdown">
          <NavLink to="college" className="dropbtn">College</NavLink>
          <div class="dropdown-content">
            <NavLink to="college/student">Student</NavLink>
            <NavLink to="college/teacher">Teacher</NavLink>
          </div>
        </li>
        <li><NavLink to="map">Map</NavLink></li>
        <li className="dropdown">
          <NavLink to="hooks" className="dropbtn">Hooks</NavLink>
          <div class="dropdown-content">
            <NavLink to="hooks/use-effect">useEffect</NavLink>
            <NavLink to="hooks/use-memo">useMemo</NavLink>
            <NavLink to="hooks/use-context">useContext</NavLink>
          </div>
        </li>
        <li className="dropdown">
          <NavLink to="component-types" className="dropbtn">Component Type</NavLink>
          <div class="dropdown-content">
            <NavLink to="component-types/class-demo">Class</NavLink>
            <NavLink to="component-types/func-demo">Functional</NavLink>
          </div>
        </li>
        <li><NavLink to="conditional-demo">Conditional Component</NavLink></li>
        <li><NavLink to="lifecycle">Lifecycle</NavLink></li>
        <li><NavLink to="axios">Axios</NavLink></li>
        <li><NavLink to="api-nested">API Nested results</NavLink></li>
        <li><NavLink to="data-map">Data Map</NavLink></li>
        <li><NavLink to="counter">Counter</NavLink></li>
        <li><NavLink to="spa">SPA</NavLink></li>
        <li><NavLink to="/">Logout</NavLink></li>
      </ul>
      <Outlet />
    </div>
  );
}
