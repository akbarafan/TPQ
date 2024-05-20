import React from 'react'
import { Link } from 'react-router-dom'

const UsrSideNav = () => {
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
                <Link to="/userpage" className="nav-link">
                  <i className="nav-icon fa fa-home" />
                  <p className='ml-2'>
                    Beranda 
                  </p>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/userpage/materi" className="nav-link">
                <i className="nav-icon fas fa-book"/>
                  <p className='ml-2'>
                    Materi
                  </p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/userpage/quiz" className="nav-link">
                <i className="nav-icon fas fa-pencil"/>
                  <p className='ml-2'>
                    Quiz
                  </p>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/userpage/presence" className="nav-link">
                <i className="nav-icon fas fa-edit"/>
                  <p className='ml-2'>
                    Presence
                  </p>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/userpage/histPresence" className="nav-link">
                <i className="nav-icon fas fa-history" />
                  <p className='ml-2'>
                    History Presence
                  </p>
                </Link>
              </li>               */}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  )
}

export default UsrSideNav
