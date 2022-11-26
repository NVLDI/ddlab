import './App.css';
import React from 'react';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/Home/home";
import AdminLogin from "./components/Admin/AdminProfile/AdminLogin";
import AdminReg from "./components/Admin/AdminProfile/AdminRegistration";
import AdminProfile from "./components/Admin/AdminProfile/AdminProfile";
import DistributorLogin from "./components/Distributor/DistributorLogin";
import DistributorReg from "./components/Distributor/DistributorRegistration";
import Product from "./components/Products/Product";
import AdminDashboard from "./components/Admin/AdminProfile/AdminDashboard";
import AddProduct from "./components/Admin/DashboardPages/Product/AddProduct";
import DistributorFullReg from "./components/Admin/DashboardPages/Distributor/DistributorFullRegistration";
import DistributorListing from "./components/Admin/DashboardPages/Distributor/DistributorListing";
import ProductListing from './components/Admin/DashboardPages/Product/ProductListing';
import DistibutorProfile from './components/Distributor/DistibutorProfile';
import SelectedProduct from './components/Products/SelectedProductList/SelectedProductList'
import Cart from './components/Cart/Cart'

Amplify.configure(awsconfig)
function App() {
  
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/AdminLogin" element={<AdminLogin/>}/>
                <Route exact path="/AdminReg" element={<AdminReg/>}/>
                <Route exact path="/AdminDashboard" element={<AdminDashboard/>}/>
                <Route exact path="/AdminProfile" element={<AdminProfile/>}/>

                <Route exact path="/DistributorLogin" element={<DistributorLogin/>}/>
                <Route exact path="/DistributorReg" element={<DistributorReg/>}/>
                <Route exact path="/distributorListing" element={<DistributorListing/>}/>
                <Route exact path="/DistributorFullReg" element={<DistributorFullReg/>}/>
                <Route exact path="distibutorProfile" element={<DistibutorProfile/>}/>

                <Route exact path="/Product" element={<Product/>}/>
                <Route exact path="/addProduct" element={<AddProduct/>}/>
                <Route exact path="/productListing" element={<ProductListing/>}/>
                <Route exact path="/selectedProduct" element={<SelectedProduct/>}/>

                <Route exact path="/cart" element={<Cart/>}/>
            </Routes>
    </Router>
    </div>
  );
}

export default (App);
