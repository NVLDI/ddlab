import React, { useState, useEffect } from 'react';
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
import { createAddDistributor} from '../../../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

export default function DistributorFullRegistration() {
  const [addDistributor,setAddDistributor]=useState({})
    const handleClick= async()=>{
      console.log('addDistributor',addDistributor)
      const { firstname,lastname,nicNo,address,state,country,zipCode,occupation,username,password,
        confirmPassword,phoneNo,email,bankName,accountNo,shiftCode,
        bankAddress,bankcountry,sponsorId,sponsorName,contactNo}=addDistributor;
      const addDistributorInput = {
        firstname,
        lastname,
        nicNo,
        address,
        state,
        country,
        zipCode,
        occupation,
        username,
        password,
        confirmPassword,
        phoneNo,
        email,
        bankName,
        accountNo,
        shiftCode,
        bankAddress,
        bankcountry,
        sponsorId,
        sponsorName,
        contactNo
        }
    await API.graphql(graphqlOperation(createAddDistributor, { input: addDistributorInput }));
    alert('Admin Added Successfully');
    };
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
    }}
    value={addDistributor.firstname}
onChange={e =>setAddDistributor({...addDistributor, firstname:e.target.value})}/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.lastname}
    onChange={e =>setAddDistributor({...addDistributor, lastname:e.target.value})}/>
      <TextField id="outlined-basic" label="NIC No" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.nicNo}
    onChange={e =>setAddDistributor({...addDistributor, nicNo:e.target.value})}/>
    <br/>
      <TextField id="outlined-basic" label="Address 1" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.address}
    onChange={e =>setAddDistributor({...addDistributor, address:e.target.value})}/>
      <TextField id="outlined-basic" label="Address 2" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}/>
      <FormControl>
       <InputLabel  id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="State"
          value={addDistributor.state}
          onChange={e =>setAddDistributor({...addDistributor, state:e.target.value})}>
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
     <FormControl>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="Country"
          value={addDistributor.country}
onChange={e =>setAddDistributor({...addDistributor, country:e.target.value})}>
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
        <TextField id="outlined-basic" label="Zip Code" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}
    value={addDistributor.zipCode}
onChange={e =>setAddDistributor({...addDistributor, zipCode:e.target.value})}/>
 <FormControl>
              <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="Occupationr"
          value={addDistributor.occupation}
onChange={e =>setAddDistributor({...addDistributor, occupation:e.target.value})}>
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
    <br/>
    <h5 className="miniHeader">Login & Verification Details</h5>
    <TextField id="outlined-basic" label="User Name" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.username}
    onChange={e =>setAddDistributor({...addDistributor, username:e.target.value})}/>
    <br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.password}
    onChange={e =>setAddDistributor({...addDistributor, password:e.target.value})}/>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.confirmPassword}
    onChange={e =>setAddDistributor({...addDistributor, confirmPassword:e.target.value})}/>
    <br/>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.phoneNo}
    onChange={e =>setAddDistributor({...addDistributor, phoneNo:e.target.value})}/>
      <TextField id="outlined-basic" label="Email ID" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.email}
    onChange={e =>setAddDistributor({...addDistributor, email:e.target.value})}/>
    <br/>
      <TextField id="outlined-basic" label="Bank Name" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.bankName}
    onChange={e =>setAddDistributor({...addDistributor, bankName:e.target.value})}/>
      <TextField id="outlined-basic" label="Account Number" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.accountNo}
    onChange={e =>setAddDistributor({...addDistributor, accountNo:e.target.value})}/>
     <TextField id="outlined-basic" label="Shift Code" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.shiftCode}
    onChange={e =>setAddDistributor({...addDistributor, shiftCode:e.target.value})}/>
    <br/>
      <TextField id="outlined-basic" label="Bank Address" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.bankAddress}
    onChange={e =>setAddDistributor({...addDistributor, bankAddress:e.target.value})}/>
       <FormControl>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="Country" value={addDistributor.bankcountry}
          onChange={e =>setAddDistributor({...addDistributor, bankcountry:e.target.value})}>
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
        <h5 className="miniHeader">Referral Code</h5>
    <TextField id="outlined-basic" label="Referral Code" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.sponsorId}
    onChange={e =>setAddDistributor({...addDistributor, sponsorId:e.target.value})}/>
     <TextField id="outlined-basic" label="Sponsor's Name" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.sponsorName}
    onChange={e =>setAddDistributor({...addDistributor, sponsorName:e.target.value})}/>
     <TextField id="outlined-basic" label="Contact Number" variant="outlined" inputProps={{
      style: {
        height: "15px",
      },
    }}value={addDistributor.contactNo}
    onChange={e =>setAddDistributor({...addDistributor, contactNo:e.target.value})}/>
    </Box>
    <br/>
    <Stack spacing={2} direction="row" mb={5} ml={1}>
    <Button variant="contained" onClick={handleClick}>Add</Button>
    <Button variant="contained">Clear</Button>
    </Stack>
 
    </div>
    </div>
  )
}
