import React, { useState,Fragment } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Stack, Button } from "@mui/material";
import { userColumns, userRows } from "../Data/datatablesource";
import styles from "../CSS_modules/Components/DataTable.module.css";
import {useNavigate} from 'react-router-dom'
export default function DataTable() {
  const [data, setData] = useState(userRows);
  let navigate=useNavigate()
  const handleDelete = (id) => {
    let new_data=data.filter((item) => item.id !== id)
    setData(new_data);
  };
  let viewHandler=(id)=>{navigate(`/Dashboard-Project/users/${id}`)}
  let actionColumns = {
    field: "Action",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" size="small" onClick={()=>{viewHandler(params.row.id)}}> View</Button>
          <Button variant="outlined" size="small" color="error" onClick={()=>{handleDelete(params.row.id)}}> Delete</Button>
        </Stack>
      );
    },
  };
  return (
   <Fragment>
   <div className={`${styles.datatable} `}>
   <Stack style={{height:"10%",alignItems: "end"}}>
   <Button variant="outlined" style={{width:"20%"}} onClick={()=>{navigate("/Dashboard-Project/users/new")}}>Add new User</Button></Stack>
   <DataGrid className="dark_datagrid"
     rows={data}
     columns={userColumns.concat(actionColumns)}
     pageSize={5}
     rowsPerPageOptions={[5]}
     checkboxSelection
   />
 </div></Fragment>
  );
}
