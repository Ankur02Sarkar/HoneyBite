import React from 'react'
import {Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

const ProjectInfo = ({projectdtls}) => {
  return (
    <div><Grid container spacing={5} sx={{margin:'2px'}}>
    <Grid item xs={12} sm={6} >
      <Stack direction={'column'}>
        <Typography variant='cardhrdtxt'>
          IDO INFORMATION
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body2">FCFS opens</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">dates</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Early Access</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">dates</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">FCFS closes</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Dates</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Swap Rates</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">0.02BUSD</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Total Raises</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">$30000</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Access Type</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Private</Typography>
          </Grid>
        </Grid>
      </Stack>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Stack direction={'column'}>
        <Typography variant='cardhrdtxt'>
          TOKEN INFORMATION
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body2">Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{projectdtls.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Token Symbol</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{projectdtls.token_name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Total Supply</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">5000000</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Vesting</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">15% TGE, then 17% each month</Typography>
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  </Grid></div>
  )
}

export default ProjectInfo