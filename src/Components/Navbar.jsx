import { NavLink } from "react-router-dom";
import "../Navbar.css"
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-white ">
        <div className="container">

    <p className="m-3 border-start border-3 rounded-5 p-3 text-white ">Start Reading</p>

          <button className="search-btn">
            <svg
            className="search "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 border border-1 rounded-4 p-2">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white px-3 "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white px-3" to="/blog">
                  The blog
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-white px-3" to="/Who">
                  WHO WE ARE
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="navbar-brand text-white " to="/">
            Navbar
          </NavLink>
        </div>
      </nav>
    </>
  );
}
