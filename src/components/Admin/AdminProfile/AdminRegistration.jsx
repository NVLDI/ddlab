import React, {useState}  from 'react'
import { Container ,Paper, Button} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { API, graphqlOperation } from 'aws-amplify';
import {createAddAdmin} from '../../../graphql/mutations';

export default function AdminRegistration() {
  const paperStyle={padding:'15px 20px', width:600,margin:'15px auto'}
  const [addAdmin,setAddAdmin]=useState({})
    const handleClick= async()=>{
      console.log('addAdmin',addAdmin)
      const {firstname,lastname,username,password,confirmPassword,phoneNo}=addAdmin;
      const createAddAdminInput = {
        firstname,
        lastname,
        username,
        password,
        confirmPassword,
        phoneNo
        }
    await API.graphql(graphqlOperation(createAddAdmin, { input: createAddAdminInput }));
    alert('Admin Added Successfully');
    };
return (
  <div><Container>
  <Paper elevation={3} style={paperStyle}>
      <h1>Adminstration Registration</h1>
<Box
component="form"
sx={{
'& > :not(style)': { m: 1 },
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth
value={addAdmin.firstname}
onChange={e =>setAddAdmin({...addAdmin, firstname:e.target.value})}
/>
<TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
value={addAdmin.lastname}
onChange={e =>setAddAdmin({...addAdmin, lastname:e.target.value})}
/>
<TextField id="outlined-basic" label="User Name" variant="outlined" fullWidth
value={addAdmin.username}
onChange={e =>setAddAdmin({...addAdmin, username:e.target.value})}
/>
<TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth
value={addAdmin.password}
onChange={e =>setAddAdmin({...addAdmin, password:e.target.value})}
/>
<TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" fullWidth
value={addAdmin.confirmPassword}
onChange={e =>setAddAdmin({...addAdmin, confirmPassword:e.target.value})}
/>
<TextField id="outlined-basic" label="Phone No" variant="outlined" fullWidth
value={addAdmin.phoneNo}
onChange={e =>setAddAdmin({...addAdmin, phoneNo:e.target.value})}
/>
<br/>
<Button variant="contained" onClick={handleClick}>
  Submit
</Button>
<Button variant="contained">
  Reset
</Button>
</Box>
</Paper>
</Container></div>
)
}