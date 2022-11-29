import React, { Fragment } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import styles from '../CSS_modules/Home.module.css'
import { useParams } from 'react-router-dom'
import UserInfo from '../Components/UserInfo'
import Chart from '../Components/Chart'
import ListItems from '../Components/ListItems'
function Single() {
  let { userId } = useParams()
  return (
    <Fragment>
      <div className={`${styles.container}`}>
        <Sidebar />
        <div className={`${styles.homeContainer}`}>
          <Navbar />
          <br />
          <Stack
            direction="row"
            spacing={3}
            style={{ paddingLeft: '30px', marginBottom: '20px' }}
          >
            <UserInfo userId={userId} />
            <Chart title="User spending Last 6 month revenue" />
          </Stack>
          <Box style={{ paddingLeft: '30px' }}>
            <Typography gutterBottom style={{ color: 'gray' }}>
              Last Transactions
            </Typography>
            <ListItems />
          </Box>
        </div>
      </div>
    </Fragment>
  )
}

export default Single
