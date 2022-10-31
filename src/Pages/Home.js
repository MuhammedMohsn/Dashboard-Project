import React,{Fragment} from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from "../Components/Navbar"
import styles from '../CSS_modules/Home.module.css'
import Widgets from '../Components/Widgets'
import Feature from '../Components/Feature'
import Chart from '../Components/Chart'
import {Stack} from '@mui/material'
import ListItems from '../Components/ListItems'
function Home() {
  return (
    <Fragment>
    <div className={`${styles.container}`}>
    <Sidebar/>
    <div className={`${styles.homeContainer}`}>
    <Navbar/>
    <br/>
    <Widgets  />
    <br/>
    <Stack direction="row" style={{height:"fit-content"}} spacing={2} padding={3}  width="100%">
    <Feature />
    <Chart title="Last 6 month revenue"/>
    </Stack>
    <ListItems/>
    </div>
    </div>
    </Fragment>
  )
}

export default Home