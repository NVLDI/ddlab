import React, {useState}  from 'react'
import Sidebar from "../../SideBar/Sidebar"
import Navbar from "../../Navbar/Navbar";
import "./AddProduct.css"
import TextField from '@mui/material/TextField';
import { API, graphqlOperation } from 'aws-amplify';
import {createAddproduct} from '../../../../graphql/mutations';
import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function Product() {
  const [addProduct,setAddProduct]=useState({})
    const handleClick= async()=>{
      console.log('Add Product',addProduct)
      try {
      const {productCode,productName,diamondShape,shapeCutting,diamondColor,diamondCarat,diamondClarity,certificateNo,msrp,currency,image}=addProduct;
      const paperStyle={padding:'15px 20px', width:600,margin:'20px auto'}
      const createAddProductInput = {
        productCode,
        productName,
        diamondShape,
        shapeCutting,
        diamondColor,
        diamondCarat,
        diamondClarity,
        certificateNo,
        msrp,
        currency,
        }
    await API.graphql(graphqlOperation(createAddproduct, {input: createAddProductInput}));
    alert('Product Added Successfully');
      }catch(error){
        console.log('Add Product error', error);
        alert('You must add images');
      }
    };
  return (
    <div>
        <Navbar/>
        <div className="DistributorContainer">
        <Sidebar/>
                <h2>Add Products</h2>
              <Box component="form"  sx={{
        '& > :not(style)': { m: 1, width: '35ch', mt:1 },
      }}
      noValidate
      autoComplete="off">
              <img className="ProductImg" src="" alt="" />
              <img className="ProductImg" src="" alt="" />
              <img className="ProductImg" src="" alt="" />
              <img className="ProductImg" src="" alt="" />
              <br/>
              <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
      <br/>
              <TextField id="outlined-basic" label="Product Code" variant="outlined" fullWidth value={addProduct.productCode}
                      onChange={e =>setAddProduct({...addProduct, productCode:e.target.value})} />
              <TextField id="outlined-basic" label="Product Name" variant="outlined" fullWidth value={addProduct.productName}
                    onChange={e =>setAddProduct({...addProduct, productName:e.target.value})}/>
                    <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Diamond Shape</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
          label="Diamond Shape"
          value={addProduct.diamondShape}
          onChange={e =>setAddProduct({...addProduct, diamondShape:e.target.value})}>
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"Round"}>Round</MenuItem>
          <MenuItem value={"Cushion"}>Cushion</MenuItem>
          <MenuItem value={"Princess"}>Princess</MenuItem>
          <MenuItem value={"Emerald"}>Emerald</MenuItem>
          <MenuItem value={"Radiant"}>Radiant</MenuItem>
          <MenuItem value={"Asscher"}>Asscher</MenuItem>
          <MenuItem value={"Pear"}>Pear</MenuItem>
          <MenuItem value={"Marquise"}>Marquise</MenuItem>
          <MenuItem value={"Heart"}>Heart</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Shape Cutting</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
          label="Shape Cutting"
          value={addProduct.shapeCutting}
          onChange={e =>setAddProduct({...addProduct, shapeCutting:e.target.value})} >
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"Good"}>Good</MenuItem>
          <MenuItem value={"Very Good"}>Very Good</MenuItem>
          <MenuItem value={"Prefect Idea"}>Prefect Idea</MenuItem>
          <MenuItem value={"Prefect Idea"}>Prefect Idea</MenuItem>
        </Select>
        </FormControl>
        <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Diamond Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
          label="Diamond Color"
          value={addProduct.diamondColor}
                      onChange={e =>setAddProduct({...addProduct, diamondColor:e.target.value})} >
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"D"}>D</MenuItem>
          <MenuItem value={"E"}>E</MenuItem>
          <MenuItem value={"F"}>F</MenuItem>
          <MenuItem value={"G"}>G</MenuItem>
          <MenuItem value={"H"}>H</MenuItem>
          <MenuItem value={"I"}>I</MenuItem>
          <MenuItem value={"J"}>J</MenuItem>
          <MenuItem value={"K"}>K</MenuItem>
        </Select>
        </FormControl>
        
        <TextField id="outlined-basic" label="Dimaond Carat" variant="outlined" fullWidth value={addProduct.diamondCarat}
                      onChange={e =>setAddProduct({...addProduct, diamondCarat:e.target.value})} />
        <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Diamond Clarity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
          label="Diamond Clarity"
          value={addProduct.diamondClarity}
                      onChange={e =>setAddProduct({...addProduct, diamondClarity:e.target.value})} >
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"I1"}>I1</MenuItem>
          <MenuItem value={"SI2"}>SI2</MenuItem>
          <MenuItem value={"SI1"}>SI1</MenuItem>
          <MenuItem value={"VS2"}>VS2</MenuItem>
          <MenuItem value={"VS1"}>VS1</MenuItem>
          <MenuItem value={"VVS2"}>VVS2</MenuItem>
          <MenuItem value={"VVS1"}>VVS1</MenuItem>
          <MenuItem value={"I"}>I</MenuItem>
          <MenuItem value={"FI"}>FI</MenuItem>
        </Select>
        </FormControl>
         <TextField id="outlined-basic" label="Certificate No" variant="outlined" fullWidth value={addProduct.certificateNo}
                      onChange={e =>setAddProduct({...addProduct, certificateNo:e.target.value})}/>
         <TextField id="outlined-basic" label="MSRP" variant="outlined" fullWidth value={addProduct.msrp}
                      onChange={e =>setAddProduct({...addProduct, msrp:e.target.value})} />
        <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
          label="Currency"
          value={addProduct.currency}
                      onChange={e =>setAddProduct({...addProduct, currency:e.target.value})}>
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"HKD"}>HKD</MenuItem>
          <MenuItem value={"RMB"}>RMB</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"RM"}>RM</MenuItem>
        </Select>
        </FormControl>
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
