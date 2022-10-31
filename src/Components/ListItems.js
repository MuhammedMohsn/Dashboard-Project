import React,{Fragment} from 'react'
import {Paper,Avatar, Typography} from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {rows} from '../Data/UserTableData'
import styles from '../CSS_modules/Components/listItems.module.css'
function ListItems() {
  return (
    <Fragment>
    <Paper elevation={10}>
    <TableContainer style={{width: '100%', height: '100%'}} >
    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="dark_table">
      <TableHead>
        <TableRow>
          <TableCell align="center" className="dark_tablecell">Tracking ID</TableCell>
          <TableCell align="center" className="dark_tablecell">Product</TableCell>
          <TableCell align="center" className="dark_tablecell">Customer</TableCell>
          <TableCell align="center" className="dark_tablecell">Date</TableCell>
          <TableCell align="center" className="dark_tablecell">Amount</TableCell>
          <TableCell align="center" className="dark_tablecell">Payment Method</TableCell>
          <TableCell align="center" className="dark_tablecell">Status</TableCell>
         </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow 
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center" className="dark_tablecell">
              {row.id}
            </TableCell>
            <TableCell align="center" className="dark_tablecell">{row.product}</TableCell>
            <TableCell align="center" className={`${styles.customer_item} dark_tablecell`}>
            <Avatar alt={row.customer} src={row.img} style={{width:"80",height:"80"}} />
            <Typography style={{width:"45%",height:"50%"}}>{row.customer}</Typography>
            </TableCell>
            <TableCell align="center" className="dark_tablecell">{row.date}</TableCell>
            <TableCell align="center" className="dark_tablecell">{row.amount}</TableCell>
            <TableCell align="center" className="dark_tablecell">{row.method}</TableCell>
            <TableCell align="center" className="dark_tablecell"
            style={{color:row.status==="Approved"?"green":"orange"}}
            >{row.status}</TableCell></TableRow>))}
      </TableBody>
    </Table>
  </TableContainer>
    </Paper>
    </Fragment>
  )
}

export default ListItems