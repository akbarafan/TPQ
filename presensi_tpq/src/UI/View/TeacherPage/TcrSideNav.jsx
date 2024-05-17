import React from 'react'
import { Link } from 'react-router-dom'

const TcrSideNav = () => {
  const akunString = localStorage.getItem('akun');
  const akun = JSON.parse(akunString);

  return (
    <div>
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        {/* Brand Logo */}
        
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img src='https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain' alt="Bromo AirLines Logo" className="brand-image img-circle elevation-4" style={{opacity: '.9'}} />
            </div>
            <div className="info">
              <span className="brand-text font-weight-bold">{akun.name}</span>
            </div>
          </div>
          
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              
              <li className="nav-item">
                <Link to="/teacher" className="nav-link">
                  <i className="nav-icon fa fa-tachometer-alt" />
                  <p className='ml-2'>
                    Beranda 
                  </p>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/teacher/makePresence" className="nav-link">
                <i className="nav-icon fas fa-edit"/>
                  <p className='ml-2'>
                    Make Presence
                  </p>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/teacher/recap" className="nav-link">
                <i className="nav-icon fas fa-book" />
                  <p className='ml-2'>
                    Recap Presence
                  </p>
                </Link>
              </li>              
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  )
}

export default TcrSideNav
