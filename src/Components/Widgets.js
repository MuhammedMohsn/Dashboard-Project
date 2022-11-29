import React, { Fragment } from 'react'
import { Paper, Card, Stack, Box, IconButton } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Person2Icon from '@mui/icons-material/Person2'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
// data used in widgets
let data = [
  {
    header: 'Users',
    percent: '20%',
    salary: 100,
    view: 'see all users',
    icon: <Person2Icon />,
  },
  {
    header: 'Orders',
    percent: '20%',
    salary: 100,
    view: 'view all Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    header: 'Earnings',
    percent: '20%',
    salary: 100,
    view: 'see Earnings',
    icon: <MonetizationOnIcon />,
  },
  {
    header: 'Balance',
    percent: '20%',
    salary: 100,
    view: 'see details',
    icon: <AccountBalanceWalletIcon />,
  },
]
// widgets used in home page
function Widgets() {
  let widgets = data.map((item) => {
    let { header, percent, salary, view, icon } = item
    return (
      <Paper elevation={10} square style={{ width: '20%' }} key={Math.random()}>
        <Box style={{ height: '100%', width: '100%' }}>
          <Card variant="outlined" className="dark_widget">
            <CardContent>
              <Stack
                direction="row"
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>{header}</Typography>
                <Typography style={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton>
                    <KeyboardArrowUpIcon />{' '}
                  </IconButton>
                  {percent}{' '}
                </Typography>
              </Stack>
              <Typography component="h5" variant="h5">
                {salary} $
              </Typography>
            </CardContent>
            <CardActions
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: 'blue',
              }}
            >
              <Button size="small">{view} </Button>
              <IconButton color="primary">{icon}</IconButton>
            </CardActions>
          </Card>
        </Box>
      </Paper>
    )
  })
  return (
    <Fragment>
      <Stack direction="row" style={{ justifyContent: 'space-around' }}>
        {widgets}
      </Stack>
    </Fragment>
  )
}

export default Widgets
