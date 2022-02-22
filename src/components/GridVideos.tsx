import { Grid } from '@mui/material'
import React from 'react'
import CardVideo from './CardVideo'

export default function GridVideos() {
  return (
    <Grid container>
      <Grid item>
        <CardVideo />
      </Grid>
    </Grid>
  )
}
