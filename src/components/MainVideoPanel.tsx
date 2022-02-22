import React from 'react'
import { Stack } from '@mui/material'
import { CardVideoMini } from 'src/components'

export const MainVideoPanel = () => {
  return (
    <Stack direction='row'>
      <iframe
        width="560"
        height="315"
        // src="https://www.youtube-nocookie.com/embed/7Fj7OE1MrbM"
        src="https://www.youtube-nocookie.com/embed/wzsGwcH6cEk?controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      // allowfullscreen
      // frameborder="0"
      ></iframe>
      <Stack>
        <CardVideoMini />
        <CardVideoMini />
        <CardVideoMini />
      </Stack>
    </Stack>
  )
}
