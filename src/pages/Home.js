import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Card, Grid ,Button} from '@mui/material'
function Home() {
  const navigate = useNavigate();
  function services (){
    navigate('/services')
  }
  return (
    <div>
      <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6}>
               <Card>
                <Button onClick={()=>navigate("/services")}>Services</Button>
               </Card>
          </Grid>
      </Grid>
    </div>
  )
}

export default Home