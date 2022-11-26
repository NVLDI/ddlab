import React from 'react'
import Navbar from "../Products/Navbar/Navbar";
import "./Cart.css"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Cards from '../Card/Card'
import BankPay from '../BankPayment/Bank'

export default function Cart() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
    <Navbar/>
    <div className="CartContainer">
    <h3>Billing & Shipping Information</h3>
    <br/>
    <h4>Shopping basket</h4>
  <br/>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch', mt:1 },
      }}
      noValidate
      autoComplete="off"
    >
      <img className="ProductImg-0" src="" alt=""/>
      <img className="ProductImg-0" src="" alt=""/>
      <img className="ProductImg-0" src="" alt=""/>
      <img className="ProductImg-0" src="" alt=""/>
      
      </Box>
    <h4>Billing Address</h4>
    <br/>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch', mt:1 },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField id="outlined-basic" label="First Name" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <TextField id="outlined-basic" label="Last Name" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <TextField id="outlined-basic" label="Mail id" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <TextField id="outlined-basic" label="Address #1" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <FormControl>
       <InputLabel  id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="State">
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
        <FormControl>
       <InputLabel  id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="Country">
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
       <TextField id="outlined-basic" label="Zip Code" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <TextField id="outlined-basic" label="Phone" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <br/>
       <h4>Shipping Address</h4>
       <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Same as Billing Address" />
      </FormGroup>
       <TextField id="outlined-basic" label="First Name" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <TextField id="outlined-basic" label="Last Name" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <TextField id="outlined-basic" label="Mail id" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <TextField id="outlined-basic" label="Address #1" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <FormControl>
       <InputLabel  id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="State">
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
        <FormControl>
       <InputLabel  id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className="select"
          label="Country">
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
        </FormControl>
       <TextField id="outlined-basic" label="Zip Code" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <TextField id="outlined-basic" label="Phone" variant="outlined" inputProps={{style: {height: "15px"},}}/>
       <br/>
      </Box>
      <br/>
      <h3>Payment Information</h3>
      <br/>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70ch', mt:1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h4 className="paymentOption">Choose a Payment Option</h4>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Credit/Debit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <Cards/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Bank Wire</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <BankPay/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Wallet Payment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Alipay
          WeChat Pay
          Paypal
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Crypto Currency</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>

      <br/>
      <br/>
 </div>
  </>
  )
}
