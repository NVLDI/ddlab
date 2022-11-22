import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import "./Product.css"
import { listAddproducts} from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

export default function Product() {
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
    <div><Navbar/>
    <div className="container">
        <div className="middle-1">
        <img className='data' src="https://www.pngkit.com/png/full/989-9897010_free-png-transparent-diamond-crown-png-image-with.png" alt=""/>
        <h1>DD Lab Grown Diamond COMING SOON</h1>
        <h4 className='hcolor-1'>Product Page is under construction </h4>
        <h6 className='hcolor-1'>We will be back soon</h6>
        </div>
    </div>
    </div>
  )
}
