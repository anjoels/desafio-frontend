import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function CardVideo() {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://ia800402.us.archive.org/26/items/03-05-2016_Images_Images_1-30/01_PT_hero_42_153645159.jpg"
      // width="640"
      // height="360"
      />
      <CardContent>
        {/* <iframe
          width="560"
          height="315"
          // src="https://www.youtube-nocookie.com/embed/7Fj7OE1MrbM"
          src="https://www.youtube-nocookie.com/embed/wzsGwcH6cEk?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowfullscreen
        // frameborder="0"
        ></iframe> */}
        <Typography variant='h3'>Video Name</Typography>
        <Typography>Descricao do video</Typography>
      </CardContent>
    </Card>
  )
}
