import React from 'react'
import Sidebar from "../../SideBar/Sidebar"
import Navbar from "../../Navbar/Navbar";
import "./Distributor.css"
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

export default function DistributorFullRegistration() {
  
  return (
    <div>
    <Navbar/>
        <div className="DistributorContainer">
            <Sidebar/>
       
        <h1>Distributor Registration</h1>
        <h3 className="DistributorNo">Distributor No : D-0000008</h3>
        <br/>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch', mt:1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h5 className="miniHeader">Personal Details</h5>
      <TextField id="outlined-basic" label="First Name" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
      <TextField id="outlined-basic" label="NIC No" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
    <br/>
      <TextField id="outlined-basic" label="Address 1" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
      <TextField id="outlined-basic" label="Address 2" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
      <FormControl>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="Diamond Color">
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
     <FormControl>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="Diamond Color">
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
        <TextField id="outlined-basic" label="Zip Code" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
    <br/>
    <h5 className="miniHeader">Login & Verification Details</h5>
    <TextField id="outlined-basic" label="User Name" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
    <br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
    <br/>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
      <TextField id="outlined-basic" label="Email ID" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
    <br/>
      <TextField id="outlined-basic" label="Bank Name" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
      <TextField id="outlined-basic" label="Account Number" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
     <TextField id="outlined-basic" label="Shift Code" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
    <br/>
      <TextField id="outlined-basic" label="Bank Address" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
       <FormControl>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="Diamond Color">
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
        <h5 className="miniHeader">Referral Code</h5>
    <TextField id="outlined-basic" label="Referral Code" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
     <TextField id="outlined-basic" label="Sponsor's Name" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
     <TextField id="outlined-basic" label="Contact Number" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
    </Box>
    <br/>
    <Stack spacing={2} direction="row" mb={5} ml={1}>
    <Button variant="contained">Add</Button>
    <Button variant="contained">Clear</Button>
    </Stack>
 
    </div>
    </div>
  )
}
