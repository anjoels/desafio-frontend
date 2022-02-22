import { Grid } from '@mui/material'
import React from 'react'
import { CardVideo } from 'src/components'

const dta = [1, 2, 3, 4, 5, 6, 7, 8];

export const GridVideos = () => {
  return (
    <Grid container>
      {dta.map(v =>
        <Grid key={v} item>
          <CardVideo />
        </Grid>
      )}
    </Grid>
  )
}
