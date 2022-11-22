import React, {useState, useEffect}  from 'react'
import { Paper} from '@mui/material';
import {listAddAdmins} from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

export default function Content() {
    const paperStyle={padding:'15px 20px', width:600,margin:'15px auto'}
    const paperHeader={padding:'15px 20px', width:600,margin:'15px auto'}
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
      fetchAdmin();
    }, []);
    const fetchAdmin = async ()=> {
      try{
        const AdminData = await API.graphql(graphqlOperation(listAddAdmins));
        const AdminList = AdminData.data.listAddAdmins.items;
        console.log('Admin List',AdminList );
        setAdmin(AdminList);
      }catch(error)
      {
        console.log('error on fetching Admin', error);
      }
    };
  return (
    <div>
       <div className="adminList">
       <h2 style={paperHeader}>Admin List</h2>
    {admin.map((Admin, idx) => {
        return (
            <Paper variant="outlined" elevation={2} key={`admin${idx}`} style={paperStyle}>
                
                      <div className="adminList">
                        <div className="firstname">First Name: {Admin.firstname}</div>
                        <div className="lastname">Last Name: {Admin.lastname}</div>
                        <div className="username">User Name: {Admin.username}</div>
                        <div className="phoneNo">phone No: {Admin.phoneNo}</div>
                    </div>
            </Paper>
        );
    })}
</div>
</div>
  )
}
