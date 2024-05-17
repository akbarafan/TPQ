import React from 'react'
import UsrHeader from './UsrHeader'
import { Outlet } from 'react-router-dom'
import UsrSideNav from './UsrSideNav'
import UsrFooter from './UsrFooter'

const UsrPage = () => {
  return (
    <body className='hold-transition sidebar-mini layout-fixed'>
      <div className='wrapper'>
        <UsrHeader/>
        <UsrSideNav/>
        <Outlet/>
        <UsrFooter/>
      </div>
    </body>
  )
}

export default UsrPage
