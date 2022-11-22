import React, {useState}  from 'react'
import Sidebar from "../../SideBar/Sidebar"
import Navbar from "../../Navbar/Navbar";
import "./AddProduct.css"
import { API, graphqlOperation } from 'aws-amplify';
import {createAddproduct} from '../../../../graphql/mutations';
import { Container ,Paper, Button} from '@mui/material';

export default function Product() {
  const [addProduct,setAddProduct]=useState({})
    const handleClick= async()=>{
      console.log('Add Product',addProduct)
      try {
      const {productCode,productName,diamondShape,shapeCutting,diamondColor,diamondCarat,diamondClarity,certificateNo,msrp,currency,image}=addProduct;
    
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
      }
    };

  return (
    <div>
        <Navbar/>
        <div className="container">
        <Sidebar/>
        <div className="product">
            <h2 className="productClient">Add Product</h2>
            <div className="productWidgetClient">
                    <div className="newproductItem">
                    <div className="ProductUpload">
            <img className="ProductImg" src="" alt="" />
            <input className="namedefine" type="file" id="file"/>
            </div>
                    </div>
                    <div className="newproductItem">
                    <label>Product Code</label>
                    <input type="text" placeholder="" value={addProduct.productCode}
                      onChange={e =>setAddProduct({...addProduct, productCode:e.target.value})} />   
                    <label className="namedefine">Product Name</label>
                    <input type="text" placeholder="" value={addProduct.productName}
onChange={e =>setAddProduct({...addProduct, productName:e.target.value})}/>
                    <label className="namedefine">Diamond Shape</label>
                    <select id="example" class="autocomplete" value={addProduct.diamondShape}
onChange={e =>setAddProduct({...addProduct, diamondShape:e.target.value})} >
                    <option value="None">None</option>
                    <option value="Round">Round</option>
                    <option value="Cushion">Cushion</option>
                    <option value="Princess">Princess</option>
                    <option value="Emerald">Emerald</option>
                    <option value="Radiant">Radiant</option>
                    <option value="Asscher">Asscher</option>
                    <option value="Pear">Pear</option>
                    <option value="Marquise">Marquise</option>
                    <option value="Heart">Heart</option>
                    </select>
                    <label className="namedefine">Shape Cutting</label>
                    <select id="example" class="autocomplete" value={addProduct.shapeCutting}
onChange={e =>setAddProduct({...addProduct, shapeCutting:e.target.value})} >
                    <option value="None">None</option>
                    <option value="Good">Good</option>
                    <option value="Very Good">Very Good</option>
                    <option value="Idea">Idea</option>
                    <option value="Prefect Idea">Prefect Idea</option>
                    </select>
                    <label className="namedefine">Diamond Color</label>
                    <select id="example" class="autocomplete" value={addProduct.diamondColor}
onChange={e =>setAddProduct({...addProduct, diamondColor:e.target.value})} >
                    <option value="None">None</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                    <option value="K">K</option>
                    </select>
                    </div>
                    <div className="newproductItem">
                    <label>Diamond Carat</label>
                    <input type="text" placeholder="" value={addProduct.diamondCarat}
onChange={e =>setAddProduct({...addProduct, diamondCarat:e.target.value})} />
                    <label className="namedefine">Diamond Clarity</label>
                    <select id="example" class="autocomplete" value={addProduct.diamondClarity}
onChange={e =>setAddProduct({...addProduct, diamondClarity:e.target.value})} >
                    <option value="None">None</option>
                    <option value="I1">I1</option>
                    <option value="SI2">SI2</option>
                    <option value="SI1">SI1</option>
                    <option value="VS2">VS2</option>
                    <option value="VS1">VS1</option>
                    <option value="VVS2">VVS2</option>
                    <option value="VVS1">VVS1</option>
                    <option value="I">I</option>
                    <option value="FI">FI</option>
                    </select>
                    <label className="namedefine">Certificate No</label>
                    <input type="text" placeholder="" value={addProduct.certificateNo}
onChange={e =>setAddProduct({...addProduct, certificateNo:e.target.value})}/>   
                    <label className="namedefine">MSRP</label>
                    <input type="text" placeholder="" value={addProduct.msrp}
onChange={e =>setAddProduct({...addProduct, msrp:e.target.value})} />
                    <label className="namedefine">Currency</label>
                    <select id="example" class="autocomplete" nvalue={addProduct.currency}
onChange={e =>setAddProduct({...addProduct, currency:e.target.value})}>
                    <option value="None">None</option>
                    <option value="HKD">HKD</option>
                    <option value="RMB">RMB</option>
                    <option value="USD">USD</option>
                    <option value="RM">RM</option>
                    </select>
                    </div>
                    <div className='newProductItem-1-button'>
                    <Button variant="contained" onClick={handleClick}>
  Submit
</Button>
            </div>
            
            </div>
            </div>
        </div>
        </div>
  )
}
