import React from 'react'
import {Button} from '@mui/material';

export default function 
() {
  return (
    <div>
         <div className="form-group">
                <input
                  type="tel"
                  name="number"
                  className="form-control"
                  placeholder="Account Number"
                  pattern="[\d| ]{16,22}"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Shift Code"
                />
              </div>
              <Button className="buttonStyle" variant="contained" >Pay</Button>
    </div>
  )
}
