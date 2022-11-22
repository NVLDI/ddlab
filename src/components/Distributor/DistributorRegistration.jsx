import React, { useState, useEffect } from 'react';
import { Container ,Paper, Button} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from "../Navbar/Navbar";
import {  listAddDistributors} from '../../graphql/queries';
import { createAddDistributor} from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';



export default function DistributorRegistration() {
    const paperStyle={padding:'15px 20px', width:600,margin:'15px auto'}
    const [distributor, setDistributor] = useState([]);
useEffect(() => {
  fetchDistributor();
}, []);

const fetchDistributor = async ()=> {
  try{
    const DistributorData = await API.graphql(graphqlOperation(listAddDistributors));
    const DistributorsList = DistributorData.data.listAddDistributors.items;
    console.log('Distributor List',DistributorsList );
    setDistributor(DistributorsList);
  }catch(error)
  {
    console.log('error on fetching distributor', error);
  }
};
const [addDistributor,setAddDistributor]=useState({})
    const handleClick= async()=>{
      console.log('addDistributor',addDistributor)
      const {username,password,confirmPassword,email,sponsorId}=addDistributor;
      const addDistributorInput = {
        username,
        password,
        confirmPassword,
        email,
        sponsorId,
        }
    await API.graphql(graphqlOperation(createAddDistributor, { input: addDistributorInput }));
    alert('Admin Added Successfully');
    };
  return (
    <div>
      <Navbar/>
      <Container>
    <Paper elevation={3} style={paperStyle}>
        <h2>Distributor Registration</h2>
<Box
component="form"
sx={{
  '& > :not(style)': { m: 1 },
}}
noValidate
autoComplete="off"
>
  <br/>
<TextField id="outlined-basic" label="User Name" variant="outlined" fullWidth
value={addDistributor.username}
onChange={e =>setAddDistributor({...addDistributor, username:e.target.value})}
/>
<TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth
value={addDistributor.password}
onChange={e =>setAddDistributor({...addDistributor, password:e.target.value})}
/>
<TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" fullWidth
value={addDistributor.confirmPassword}
onChange={e =>setAddDistributor({...addDistributor, confirmPassword:e.target.value})}
/>
<TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth
name="email"
value={addDistributor.email}
onChange={e =>setAddDistributor({...addDistributor, email:e.target.value})}
/>
<TextField id="outlined-basic" label="Sponsor Id" variant="outlined" fullWidth
name="sponsor_id"
value={addDistributor.sponsorId}
onChange={e =>setAddDistributor({...addDistributor, sponsorId:e.target.value})}
/>

<br/>
<br/>
<Button variant="contained" onClick={handleClick}>
    Submit
</Button>
</Box>
</Paper>
</Container></div>

  )
}