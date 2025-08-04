import * as React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button
      variant="outlined"
      startIcon={<ArrowBackIcon />}
      onClick={onClick}
      sx={{ borderRadius: '100px' }}
    >
      Back
    </Button>
  );
}
