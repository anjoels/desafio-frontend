import React from 'react';
import { Stack } from '@mui/material';
import { GridVideos, MainVideoPanel, SquarePopUp } from 'src/components';
import { useFeatureVideo, useMoreVideos } from 'src/bussines';

export const Home = () => {
  const featureVideo = useFeatureVideo();
  const moreVideos = useMoreVideos();
  return <div>
    <Stack direction='row' justifyContent='space-between'>
      <MainVideoPanel />
      <SquarePopUp />
    </Stack>
    <GridVideos />
  </div>;
};
