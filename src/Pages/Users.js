import React, { Fragment }from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import DataTable from '../Components/DataTable'
import styles from '../CSS_modules/Home.module.css'
function Users() {
  return (
    <Fragment>
    <div className={`${styles.container}`}>
    <Sidebar/>
    <div className={`${styles.homeContainer}`}>
    <Navbar />
    <br/>
    <DataTable/>
    </div>
    </div>
    
    </Fragment>
  )
}

export default Users
