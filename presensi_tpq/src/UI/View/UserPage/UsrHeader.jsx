import React from 'react'
import { Link } from 'react-router-dom';

const UsrHeader = () => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav col-12">
          <li className="nav-item ">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <h5 className="text-dark nav-link">TPQ Duafa</h5>
          </li>
          <li className="nav-item ml-auto">
                <Link to={'/login'} className="text-success nav-link">Logout</Link>
            </li>
        </ul>

        {/* {isLoggedIn ? (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a onClick={handleLogout} className="text-success">Logout</a>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <p>Log In</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                <p className="text-success">Register</p>
              </Link>
            </li>
          </ul>
        )} */}
      </nav>
    </div>
  );
}

export default UsrHeader
