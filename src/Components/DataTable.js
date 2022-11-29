import React, { useState,Fragment,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Stack, Button } from "@mui/material";
import { userColumns, userRows } from "../Data/datatablesource";
import styles from "../CSS_modules/Components/DataTable.module.css";
import {useNavigate} from 'react-router-dom'
// Datatable displayed in users page
export default function DataTable() {
  // define state for data
  const [data, setData] = useState(userRows);
  useEffect(()=>{
  // set data with data from localStorage if it exists ,if not data in localStorage, store data in localStorage
    if(localStorage.getItem("data")){
      setData(JSON.parse(localStorage.getItem("data")));}
    else{
      localStorage.setItem("data", JSON.stringify(data))}},[])
  let navigate=useNavigate()
  // delete user
  const handleDelete = (id) => {
    let new_data=data.filter((item) => item.id !== id)
    setData(new_data);
  };
  // view user info
  let viewHandler=(id)=>{navigate(`/Dashboard-Project/users/${id}`)}

  // make actions column for tableData
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
   <Button variant="outlined"  onClick={()=>{navigate("/Dashboard-Project/users/new")}}>Add new User</Button></Stack>
   <DataGrid className="dark_datagrid"
    // filling the rows with data
     rows={data}
    //concat usercolumns with actioncolumns in one table 
     columns={userColumns.concat(actionColumns)}
     pageSize={5}
     rowsPerPageOptions={[5]}
     checkboxSelection
   />
 </div></Fragment>
  );
}
