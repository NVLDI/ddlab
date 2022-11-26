import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar/Navbar";
import "./Product.css"
import sampleImage from '../../images/diamond.png';
import Box from '@mui/material/Box';
import { Container ,Paper, Button} from '@mui/material';
import Select from 'react-select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from "react-router-dom"
import Tooltip from '@mui/material/Tooltip';

const columns: GridColDef[] = [
  { field: 'Image', headerName: 'Image', width: 200 },
  { field: 'ProductCode', headerName: 'Product Code', width: 120 },
  { field: 'ProductName', headerName: 'Product Name', width: 150 },
  { field: 'DiamondShape', headerName: 'Diamond Shape', width: 130 },
  { field: 'ShapeCutting',headerName: 'Shape Cutting',width: 130,},
  { field: 'Clarity',headerName: 'Diamond Clarity',width: 150,},
  { field: 'Color',headerName: 'Diamond Color',width: 150,},
  { field: 'Carat',headerName: 'Diamond Carat',width: 150,},
  { field: 'Action',headerName: 'Action',width: 130,
  renderCell:(params)=>{
    return(
        <>
        <Tooltip title="Details">
        <Link to={"/selectedProduct"}>
        <VisibilityIcon className='icon'/>
        </Link>
        </Tooltip>
        <Tooltip title="Add to Cart">
        <ShoppingCartIcon className='icon'/>
        </Tooltip>
        </>
    )
}
},
];

const rows = [
  { id: '', ProductCode: '', ProductName: '', DiamondShape: '' , ShapeCutting: '' , Clarity: '' , Color: '' },
];

export default function Product() {
  const handleSearch= () => {
      alert('Admin Added Successfully');
  };
  const [formats, setFormats] = React.useState(() => ['button']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };
  const paperStyle={padding:'25px 20px', width:1200,margin:'20px auto'}
  return (
    <div><Navbar/>
    <h2 className="header">Products</h2>
    <div className="container">
    <Container>
  <Paper elevation={3} style={paperStyle}>
        <h3>Shape</h3>
        <br/>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Round">
        Round
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Heart">
        Heart
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Princess">
        Princess
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Oval">
        Oval
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Pear">
        Pear
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Cushion">
        Cushion
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Emerald">
        Emerald
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Radiant">
        Radiant
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Asscher">
        Asscher
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Marquise">
        Marquise
        </ToggleButton>
        </ToggleButtonGroup>
        <br/>
        <br/>
        <h3>Color Level</h3>
        <br/>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="D">
        D
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="E">
        E
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="F">
        F
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="G">
        G
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="H">
        H
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="I">
        I
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="J">
        J
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="K">
        K
        </ToggleButton>
        </ToggleButtonGroup>
        <br/>
        <br/>
        <h3>Diamond Clarity</h3>
        <br/>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="IF">
        IF
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="VVS1">
        VVS1
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="VVS2">
        VVS2
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="VS1">
        VS1
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="VS2">
        VS2
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="SI1">
        SI1
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="SI2">
        SI2
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="I1">
        I1
        </ToggleButton>
        </ToggleButtonGroup>
        <br/>
        <br/>
        <h3>Diamond Cut</h3>
        <br/>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Ideal">
        Ideal
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Excelent">
        Excelent
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="VeryGood">
        Very Good
        </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup className="space" value={formats}onChange={handleFormat}>
        <ToggleButton value="Good">
        Good
        </ToggleButton>
        </ToggleButtonGroup>
        <br/>
        <br/>
        <Button variant="contained" onclick={handleSearch}>Search</Button>
        </Paper>
  </Container>
    </div>
    <div style={{padding:'10px 10px', width:1350,margin:'20px auto',height:500}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    </div>
  )
}
