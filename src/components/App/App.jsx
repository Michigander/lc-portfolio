import React from "react";
import { HashRouter, Route, NavLink, Link, Routes } from "react-router-dom";

import "./App.css";
import LOGO from "../../assets/LOGO.png";

import Art from "../../components/Art/Art.jsx";
import About from "../../components/About/About.jsx";
import Yoga from "../../components/Yoga/Yoga.jsx";
import Landing from "../../components/Landing/Landing.jsx";

const routes = [
  {
    path: "/",
    exact: true,
    footer: true,
    main: (
      <>
        <Landing />
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
      </>
    ),
  },
  {
    path: "/about",
    footer: true,
    main: (
      <>
        <About />
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
      </>
    ),
  },
  {
    path: "/portfolio",
    footer: true,
    main: (
      <>
        <Art />
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
      </>
    ),
  },
  {
    path: "/yoga",
    footer: true,
    main: (
      <>
        <Yoga />
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
      </>
    ),
  },
];

const App = () => (
  <HashRouter>
    <div className="App">
      <div className="App__header">
        <div className="App__header-logo-container">
          <Link to="/about" className="App__header-logo-container link">
            <img
              alt="Lauren's emblem"
              src={LOGO}
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
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={route.main}
          />
        ))}
      </Routes>
    </div>
  </HashRouter>
);

export default App;
