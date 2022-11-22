import React, {useState, useEffect}  from 'react'
import {listAddDistributors} from '../../../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { Paper} from '@mui/material';
import Sidebar from "../../SideBar/Sidebar"
import Navbar from "../../Navbar/Navbar";

export default function DistributorListing() {
  const paperStyle={padding:'15px 20px', width:600,margin:'15px auto'}
    const paperHeader={padding:'15px 20px', width:600,margin:'15px auto'}
    const [distributor, setDistributor] = useState([]);
    useEffect(() => {
      fetchDistributor();
    }, []);
    const fetchDistributor = async ()=> {
      try{
        const DistributorData = await API.graphql(graphqlOperation(listAddDistributors));
        const DistributorList = DistributorData.data.listAddDistributors.items;
        console.log('Distributor List',DistributorList );
        setDistributor(DistributorList);
      }catch(error)
      {
        console.log('error on fetching Distributor', error);
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
    <h2 style={paperHeader}>Distributor List</h2>
 {distributor.map((Distributor, idx) => {
     return (
         <Paper variant="outlined" elevation={0} key={`distributor${idx}`} style={paperStyle}>
             
                   <div className="adminList">
                     <div className="firstname">User Name: {Distributor.username}</div>
                     <div className="lastname">Email Id: {Distributor.email}</div>
                     <div className="username">Sponsor ID: {Distributor.sponsorId}</div>
                     <div className="phoneNo">Created At: {Distributor.createdAt}</div>
                 </div>
         </Paper>
     );
 })}
</div>
</div>
</div>
  )
}
