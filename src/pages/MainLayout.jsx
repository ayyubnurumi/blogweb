import React from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <nav className="navbar navbar-expand fixed-top bg-warning border-bottom border-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Medusa
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
            <ul className="nav navbar-nav ms-auto gap-2">
              <li className="nav-item">
                <Link className="nav-link d-none d-md-block" to="">
                  Our story
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-none d-md-block" to="">
                  Membership
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-none d-md-block"
                  to=""
                >
                  Write
                </Link>
              </li>
              <li className="nav-item d-none d-sm-block">
                <Link className="nav-link" to={'/signin'}>Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-dark rounded-pill px-3 text-light" to={'/signin'}>Get Started</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          {/* </div> */}
        </div>
      </nav>
      <Outlet />
      <footer className="container-fluid bg-dark pt-2 d-lg-none">
        <Link style={{fontSize: '1.7rem'}} className="navbar-brand text-light" to="">
          Medusa
        </Link>
        <nav className="nav">
          <Link className="nav-link link-light ps-0" to="">
            About
          </Link>
          <Link className="nav-link link-light ps-0" to="">
            Help
          </Link>
          <Link className="nav-link link-light ps-0" to="">
            Terms
          </Link>
          <Link className="nav-link link-light ps-0" to='' >Privacy</Link>
        </nav>
      </footer>
    </>
  );
};
