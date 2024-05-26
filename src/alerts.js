import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SearchAlerts({desc}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning" variant="filled">{desc}</Alert>
    </Stack>
  );
}

