import React from 'react'
import { Outlet } from 'react-router-dom'
import TcrHeader from './TcrHeader'
import TcrSideNav from './TcrSideNav'
import TcrFooter from './TcrFooter'

const TcrPage = () => {
  return (
    <body className='hold-transition sidebar-mini layout-fixed'>
      <div className='wrapper'>
        <TcrHeader/>
        <TcrSideNav/>
        <Outlet/>
        <TcrFooter/>
      </div>
    </body>
  )
}

export default TcrPage
