import React, { Fragment,useState,useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import styles from '../CSS_modules/Home.module.css'
import {Stack,Typography,TextField,Button,Paper,Avatar,Box} from '@mui/material'
function New({title}) {
  let [usersData,setUsersData]=useState([])
  let [file,setFile]=useState("")
  // getting data from local storage when navigate from /users to /users/new
  useEffect(()=>{setUsersData(JSON.parse(localStorage.getItem('data')))},[])
  // putting the users data to localStorage
  useEffect(()=>{localStorage.setItem('data', JSON.stringify(usersData))},[usersData])
  let [dataWithNewUser,setDataWithNewUser]=useState([])
// update localStorage after the new data is added
  useEffect(()=>{
    if(dataWithNewUser){
      localStorage.setItem("data",JSON.stringify(dataWithNewUser))}
  },[dataWithNewUser])

  let [addedUser,setAddedUser]=useState({id:0,file:"",username:"",age:0,email:"",status:""})
  // change handler for input fields
  let changeHandler =(e)=>{
   let {name,value}=e.target
   if(name==="id" || name==="age"){value=parseInt(value)}
   if(name==="file"){
      let filesrc="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
      value=filesrc
    }
    setAddedUser({...addedUser,[name]:value})}
  // submit handler for form
  let submitHandler =(e)=>{
    e.preventDefault()
    // concat the newaddeddata to the previous usersdata
    let newUsers=usersData.concat(addedUser)
    setDataWithNewUser(newUsers)
    // reset input fiels after submitting
    setAddedUser({id:0,file:"",username:"",age:0,email:"",status:""})
    setFile("")
  }

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
                marginBottom: '20px',}}>
              
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
            <Stack direction="row" style={{ height: '80%', width: '100%',alignItems: 'center',justifyContent: 'center'}}  className="dark_form">
                <Stack spacing={2} as="form" onSubmit={(e)=>{submitHandler(e)}} style={{ width: '60%', height: '100%',justifyContent:'space-around' }} className="dark_form">
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
                  style={{ height: '100%', width: '70%' }}
                />
              </Box>
                
                <Stack
                    style={{ width: '100%', height: 'fit-content' }}
                    direction="row"
                    spacing={2}
                    className="dark_form"
                  >
                    <TextField style={{ width: '49%' }} type="file" name="file" 
                    value="" onChange={(e)=>{changeHandler(e);setFile(e.target.files[0])}}/>
                    <TextField
                      id="standard-basic"
                      label="Usename"
                      required
                      type="text"
                      name="username"
                      value={addedUser.username}
                      onChange={(e)=>{changeHandler(e)}}
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
                      name="email"
                      value={addedUser.email}
                      onChange={(e)=>{changeHandler(e)}}
                      required
                      variant="standard"
                      style={{ width: '49%',paddingLeft:"20px" }}/>
                  <TextField
                      id="standard-basic"
                      label="id"
                      type="number"
                      name="id"
                      value={addedUser.id}
                      onChange={(e)=>{changeHandler(e)}}
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
                      label="Status"
                      name="status"
                      type="text"
                      value={addedUser.status}
                      onChange={(e)=>{changeHandler(e)}}
                      required
                      variant="standard"
                      style={{ width: '49%',paddingLeft:"20px" }}
                  />
                    <TextField
                      id="standard-basic"
                      label="Age"
                      required
                      type="number"
                      name="age"
                      value={addedUser.age}
                      onChange={(e)=>changeHandler(e)}
                      variant="standard"
                      style={{ width: '49%',paddingLeft:"20px" }}/>
                  </Stack>
                  <Stack style={{ alignItems: 'center', justifyContent: 'center'}} className="dark_container_btn">
                  <Button variant="contained" color="success" size="large" type="submit" >
                    Send
                  </Button>
                </Stack>
                </Stack></Stack></Paper>
          </Stack>
        </div>
      </div>
    </Fragment>
  )
}

export default New
