'use client';

import {
  Box,
  Card,
  Stack,
  Button,
  Typography,
  CardHeader,
  CardContent
} from '@mui/material'

import { useRouter } from 'src/routes/hooks';

import Iconify from 'src/components/iconify/iconify';

export default function HomeView() {
  const router = useRouter();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      style={{
        padding: 10
      }}
    >
      <Card
        sx={{
          width: { lg: '50vw' },
        }}
      >
        <CardHeader
          title='Development'
        />
        <CardContent>
          <Stack direction={{lg: 'row', sm: 'column'}} gap={2} alignItems='center' justifyContent='space-between'>
            <Typography>The server is running successfully (v0.1.0)</Typography>
            <Button
              color='primary'
              variant='contained'
              onClick={() => {
                router.push('/login')
              }}
              disabled
              startIcon={
                <Iconify icon='ion:open' />
              }
            >
              Open Dashboard
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
