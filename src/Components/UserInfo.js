import React, { Fragment } from 'react'
import { Paper, Stack, Box, Button, Typography, Avatar } from '@mui/material'
import { userRows } from '../Data/datatablesource'
function UserInfo({ userId }) {
  let userInfo = userRows.find((user) => {
    return user.id === parseInt(userId)
  })
  return (
    <Fragment>
      <Paper className="user_info_dark"
        elevation={10}
        style={{ width: '50%', height: '350px', padding: '10px' }}
      >
        <Stack direction="row" style={{ height: '7%', width: '100%' }}>
          <Box style={{ width: '80%' }}></Box>
          <Button variant="outlined" size="small" style={{ width: '20%' }}>
            edit
          </Button>
        </Stack>
        <Stack style={{ height: '90%', width: '100%' }}>
          <Typography
            component="h5"
            variant="h5"
            gutterBottom
            style={{ alignSelf: 'start' }}
          >
            inforamation
          </Typography>
          <Stack
            direction="row"
            spacing={10}
            style={{ alignItems: 'center', height: '50%', width: '100%' }}
          >
            <Stack align="center" style={{ width: '50%', height: '100%' }}>
              <Avatar
                src={userInfo.img}
                alt={userInfo.username}
                style={{
                  justifyContent: 'center',
                  height: '80%',
                  width: '100%',
                }}
              />
            </Stack>
            <Stack>
              <Typography variant="h5" component="h5" className="text-center">
                {userInfo.username}
              </Typography>
              <Typography component="p">Email:{userInfo.email}</Typography>
              <Typography component="p">Phone:+1 2345 67 89</Typography>
              <Typography component="p">
                Address:Elton St. 234 Garden Yd. NewYork
              </Typography>
              <Typography component="p">Country:USA</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Fragment>
  )
}

export default UserInfo
