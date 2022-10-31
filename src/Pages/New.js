import React, { Fragment,useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import styles from '../CSS_modules/Home.module.css'
import {
  Stack,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Avatar,
} from '@mui/material'
function New({title}) {
  let [file,setFile]=useState("")
  return (
    <Fragment>
      <div className={`${styles.container}`}>
        <Sidebar />
        <div className={`${styles.homeContainer}`}>
          <Navbar />
          <br />
          <Stack
            spacing={3}
            style={{
              paddingLeft: '30px',
              marginBottom: '20px',
              height: '600px',
              width: '100%',
            }}
          >
            <Paper
              elevation={20}
              className="new_title"
              style={{
                height: '10%',
                width: '93%',
                padding: '20px',
                marginBottom: '20px',
              }}
            >
              <Typography variant="h5" component="h5" style={{ color: 'gray' }} >
                {title}
              </Typography>
            </Paper>
            <br />
            <Paper
              elevation={10}
              style={{
                height: '90%',
                width: '93%',
                padding: '20px',
                marginBottom: '20px',
              }}
              className="dark_form"
            >
              <Stack direction="row" style={{ height: '80%', width: '100%' }}  className="dark_form">
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '35%',
                  }}
                 className="dark_form"
                >
                  <Avatar
                    src={file?URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                    style={{ height: '50%', width: '50%' }}
                  />
                </Box>
                <Stack spacing={2} style={{ width: '60%', height: '100%',justifyContent:'space-around' }} className="dark_form">
                  <Stack
                    style={{ width: '100%', height: 'fit-content' }}
                    direction="row"
                    spacing={2}
                    className="dark_form"
                  >
                    <TextField style={{ width: '49%' }} type="file"  onChange={(e)=>{setFile(e.target.files[0])}}/>
                    <TextField
                      id="standard-basic"
                      label="Usename"
                      required
                      type="text"
                      variant="standard"
                      style={{ width: '49%',paddingLeft:"20px" }}
                    />
                  </Stack>
                  <Stack
                    style={{ width: '100%', height: 'fit-content' }}
                    direction="row"
                    spacing={3}
                    className="dark_form"
                  >
                    <TextField
                      id="standard-basic"
                      label="Email"
                      type="email"
                      required
                      variant="standard"
                      style={{ width: '49%',paddingLeft:"20px" }}
                    />
                    <TextField
                      id="standard-basic"
                      label="Password"
                      type="password"
                      required
                      variant="standard"
                      style={{ width: '49%',paddingLeft:"20px" }}
                    />
                  </Stack>

                  <Stack
                    style={{ width: '100%', height: 'fit-content' }}
                    direction="row"
                    spacing={3}
                    className="dark_form"
                  >
                    <TextField
                      id="standard-basic"
                      label="Phone"
                      required
                      variant="standard"
                      style={{ width: '49%',paddingLeft:"20px" }}
                    />
                    <TextField
                      id="standard-basic"
                      label="Address"
                      type="text"
                      required
                      variant="standard"
                      style={{ width: '49%',paddingLeft:"20px" }}

                    />
                  </Stack>
                </Stack>
              </Stack>
              <Stack style={{ alignItems: 'center', justifyContent: 'center' }} className="dark_container_btn">
                <Button variant="contained" color="success" size="large">
                  Send
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </div>
      </div>
    </Fragment>
  )
}

export default New
