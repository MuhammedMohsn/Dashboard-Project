import React, { Fragment,useContext } from 'react'
import darkContext from '../darkContext'
import styles from '../CSS_modules/Components/Sidebar.module.css'
import {Link} from 'react-router-dom'
import {Paper,Stack} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import QrCodeIcon from '@mui/icons-material/QrCode';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
function Sidebar() {
  let setDark=useContext(darkContext)
  return (
    <Fragment>
      <div className={`${styles.sidebar}`}>
      <h1><Link to="/Dashboard-Project/" style={{textDecoration:"none",color:"red"}}>Our Dashboard</Link></h1>
      <hr/>
        <ul>
          <li>
          main
          <Link to="/" style={{textDecoration: 'none'}}> <ul className={`${styles.flex}`}> <DashboardIcon className={`${styles.icon}`}/> Dashboard</ul>
          </Link>
          </li>
          <li>
            Lists
            <ul>
              <li ><Link className={`${styles.flex}`} to="/Dashboard-Project/users" ><GroupIcon className={`${styles.icon}`}/>users</Link></li>
              <li ><Link className={`${styles.flex}`}><QrCodeIcon className={`${styles.icon}`}/>products</Link></li>
              <li ><Link to="/delivery" className={`${styles.flex}`}><DeliveryDiningIcon className={`${styles.icon}`}/>Delivery</Link></li>
            </ul>
          </li>
          <li>
            USEFUL
            <ul>
              <li className={`${styles.flex}`}> <QueryStatsIcon className={`${styles.icon}`}/>stats</li>
              <li className={`${styles.flex}`}><NotificationsIcon className={`${styles.icon}`}/>notifications</li>
            </ul>
          </li>
          <li>
            SERVICE
            <ul>
              <li className={`${styles.flex}`}><HealthAndSafetyIcon className={`${styles.icon}`}/>System Health</li>
              <li className={`${styles.flex}`}><LoginIcon className={`${styles.icon}`}/>Logs</li>
              <li className={`${styles.flex}`}><SettingsIcon className={`${styles.icon}`}/>Settings</li>
            </ul>
          </li>
          <li>
            USER
            <ul>
              <li className={`${styles.flex}`}><AccountCircleIcon className={`${styles.icon}`}/>Profile</li> 
              <li className={`${styles.flex}`}><LogoutIcon className={`${styles.icon}`} />Log Out</li>
            </ul>
          </li>
          <li></li></ul>
          <Stack spacing={2} style={{justifyContent: 'center',alignItems: 'center',width:"100%",height:"40px"}} direction="row">
          <Paper elevation={10} style={{width:'10%',height:"70%",cursor: 'pointer'}} onClick={()=>setDark("")}></Paper>
          <Paper elevation={10} style={{backgroundColor:"gray",width:'10%',height:"70%",cursor:"pointer"}} onClick={()=>setDark("dark")}></Paper>
          </Stack>
      </div>
    </Fragment>
  )
}

export default Sidebar
