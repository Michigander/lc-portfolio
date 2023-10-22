import React from "react";
import { BrowserRouter, Route, NavLink, Link, Routes } from "react-router-dom";

import "./App.css";

import Art from "../../components/Art/Art";
import About from "../../components/About/About";
import Yoga from "../../components/Yoga/Yoga";
import Landing from "../../components/Landing/Landing";

const AppFooter = () => (
  <div className="App__footer">
    <NavLink
      to="/portfolio"
      className={({ isActive }) =>
        isActive
          ? "App__navlink App__navlink--active link"
          : "App__navlink link"
      }
    >
      portfolio
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive
          ? "App__navlink App__navlink--active link"
          : "App__navlink link"
      }
    >
      about
    </NavLink>
    <NavLink
      to="/yoga"
      className={({ isActive }) =>
        isActive
          ? "App__navlink App__navlink--active link"
          : "App__navlink link"
      }
    >
      yoga
    </NavLink>
  </div>
);

const routes = [
  {
    path: "/",
    index: true,
    main: (
      <>
        <Landing />
        <AppFooter />
      </>
    ),
  },
  {
    path: "/about",
    main: (
      <>
        <About />
        <AppFooter />
      </>
    ),
  },
  {
    path: "/portfolio",
    main: (
      <>
        <Art />
        <AppFooter />
      </>
    ),
  },
  {
    path: "/yoga",
    main: (
      <>
        <Yoga />
        <AppFooter />
      </>
    ),
  },
];

const App = () => (
  <BrowserRouter>
    <div className="App">
      <div className="App__header">
        <div className="App__header-logo-container">
          <Link to="/about" className="App__header-logo-container link">
            <img
              alt="Lauren's emblem"
              src="LOGO.png"
              className="App__header-logo"
            />
            <div className="App__header-title caps">
              LAUREN <span className="bold">CASEY</span>
            </div>
          </Link>
        </div>
      </div>
      <Routes>
        {routes.map((route) => (
          <Route
            index={route.index ?? false}
            key={route.path}
            path={route.path}
            element={route.main}
          />
        ))}
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
