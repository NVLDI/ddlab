import React, { useState, useEffect } from 'react';
import { listAddproducts} from '../../../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { Paper} from '@mui/material';
import Sidebar from "../../SideBar/Sidebar"
import Navbar from "../../Navbar/Navbar";

export default function ProductListing() {
  const paperStyle={padding:'15px 20px', width:600,margin:'15px auto'}
    const paperHeader={padding:'15px 20px', width:600,margin:'15px auto'}
  const [product, setProducts] = useState([]);
useEffect(() => {
  fetchProduct();
}, []);
const fetchProduct = async () => {
    try {
        const productData = await API.graphql(graphqlOperation(listAddproducts));
        const productList = productData.data.listAddproducts.items;
        console.log('product list', productList);
        setProducts(productList);
    } catch (error) {
        console.log('error on fetching product', error);
    }
};
  return (
    <div>
    <Navbar/>
    <div>
    <Sidebar/>
    </div>
    
<div>
<div className="adminList">
<h2 style={paperHeader}>Product List</h2>
{product.map((Product, idx) => {
 return (
     <Paper variant="outlined" elevation={0} key={`product${idx}`} style={paperStyle}>
         
               <div className="adminList">
               <div className="createdAt">Created At: {Product.createdAt}</div>
               <div className="productName">Product Name: {Product.productName}</div>
                 <div className="productCode">Product Code: {Product.productCode}</div>
                 <div className="diamondShape">Diamond Shape: {Product.diamondShape}</div>
                 <div className="shapeCutting">Shape Cutting: {Product.shapeCutting}</div>
                 <div className="diamondColor">diamondColor: {Product.diamondColor}</div>
                 <div className="diamondCarat">diamondCarat: {Product.diamondCarat}</div>
                 <div className="diamondClarity">diamondClarity: {Product.diamondClarity}</div>
                 <div className="certificateNo">certificateNo: {Product.certificateNo}</div>
                 <div className="msrp">msrp: {Product.msrp}</div>
                 <div className="currency">currency: {Product.currency}</div>
                 
             </div>
     </Paper>
 );
})}
</div>
</div>
</div>
  )
}
