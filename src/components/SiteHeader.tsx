import { AppBar, Autocomplete, Button, Divider, Grid, Stack, TextField, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useSearch, useAccount } from 'src/bussines';

export const SiteHeader = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));

  const search = useSearch();
  const account = useAccount();

  return (
    <AppBar color='secondary' position='static' >
      <Toolbar>
        <Stack width='100%' justifyContent='space-between' alignItems='center' direction={{ xs: 'column', sm: 'row' }}>
          <Stack alignItems='center'>
            <Typography variant='h1'>YOUTUBE</Typography>
            <Typography>Broadcast yourself</Typography>
          </Stack>
          <Divider orientation={sm ? "horizontal" : "vertical"} flexItem />
          <Stack
            maxWidth={{ xs: '250px', sm: '400px' }} flexGrow={1}>
            <TextField fullWidth />
            <Stack minWidth='200px' direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between'>
              <Button>Home</Button>
              <Button>Videos</Button>
              <Button>Channels</Button>
            </Stack>
          </Stack>
          <Divider orientation={sm ? "horizontal" : "vertical"} flexItem />
          <Stack>
            <Typography><Button>Create Account</Button> or <Button>Sing-in</Button></Typography>
            <Stack minWidth='200px' direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between'>
              <Button>Subscriptions</Button>
              <Button>History</Button>
              <Button>Upload</Button>
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
