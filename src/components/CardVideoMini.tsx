import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const CardVideoMini = () => {
  return (
    <Card >
      <CardMedia
        component="img"
        image="https://ia800402.us.archive.org/26/items/03-05-2016_Images_Images_1-30/01_PT_hero_42_153645159.jpg"
        width="114"
        height="55"
      />
      <CardContent>
        <Typography variant='h3'>Video Name</Typography>
        <Typography>Descricao do video</Typography>
      </CardContent>
    </Card>
  )
}
