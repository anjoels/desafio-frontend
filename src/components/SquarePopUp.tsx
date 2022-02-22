import { Box, Skeleton, Typography } from '@mui/material'
import React from 'react'

export const SquarePopUp = () => {
  return (
    <Box width={251}>
      <Skeleton variant='rectangular' width={251} height={264} />
      <Typography >Ola mundo bla bla bla lasjf afladjf lasjf laksjf alksjf lak jflak jdflkaj flkas jf</Typography>
    </Box>
  )
}