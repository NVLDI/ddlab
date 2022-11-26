import React from 'react'
import Navbar from "../Navbar/Navbar";
import Box from '@mui/material/Box';
import "./SelectedProduct.css"
import Container from '@mui/material/Container';
import {Button} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function SelectedProductList() {
  return (
    <div><Navbar/>
    <div className="DistributorContainer">
    <h2>Product Details</h2>
    <Container maxWidth="sm">
    <Box component="form"  sx={{
        '& > :not(style)': { m: 1, width: '50ch', mt:1 },
      }}
      noValidate
      autoComplete="off">
        
        <img className="ProductImg-0" src="" alt=""/>
        <br/>
        <h3>0.30-Carat Round Cut Diamond</h3>
        <h4>
        Very Good Cut | J Color | SI2 Clarity
        </h4>
        <Button className="buttonStyle" variant="contained">Add to Cart</Button>
    </Box>
    
    </Container>
    <hr className="hr"/>
    <br/>
    <br/>
        <h2>Diamond Details</h2>
        <div className="DiamondDetails">
        
      <Table sx={{width:700}} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Shape</TableCell>
            <TableCell align="left">Shape</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cut</TableCell>
            <TableCell align="left">Very Good</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell align="left">J</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Clarity</TableCell>
            <TableCell align="left">SI2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Carat Weight</TableCell>
            <TableCell align="left">0.30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Measurements</TableCell>
            <TableCell align="left">4.24 x 4.26 x 2.60 mm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product Code</TableCell>
            <TableCell align="left">LD21137000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Length/Width Ratio</TableCell>
            <TableCell align="left">1.00</TableCell>
          </TableRow>
        </TableHead>
      </Table>
        </div>
    </div>
    </div>
  )
}
