'use client';
import * as React from 'react';
import { Card, CardContent, Typography, Box, Divider, Grid } from '@mui/material';

// Reusable Row Component
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <Box sx={{ pb: 2 }}>
    <Typography variant="body1" fontWeight="bold">
      {label}
    </Typography>
    <Typography variant="subtitle2" color="text.secondary">
      {value}
    </Typography>
    <Divider sx={{ mt: 2 }} />
  </Box>
);

export default function InfoCard() {
  const details = [
    { label: 'Full Name', value: 'John Carter' },
    { label: 'Email Address', value: 'john.carter@example.com' },
    { label: 'Phone Number', value: '+1 234 567 8900' },
    { label: 'Address', value: '1234 Elm Street, Apt 56' },
    { label: 'Country', value: 'United States' }
  ];

  return (
    <Card sx={{ width: '100%', mx: 'auto', p: 2, borderRadius: '8px', }}>
      <CardContent>
        {/* Title */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Consignee Details
        </Typography>

        {/* Render rows dynamically */}
        {details.map((item) => (
          <InfoRow key={item.label} label={item.label} value={item.value} />
        ))}

        {/* Last row: State, City, Zip */}
        <Box sx={{ pt: 1 }}>
          <Grid container spacing={14}>
            {[
              { label: 'State', value: 'California' },
              { label: 'City', value: 'Los Angeles' },
              { label: 'Zip', value: '90001' }
            ].map((item) => (
              <Grid item xs={4} key={item.label}>
                <Typography variant="body1" fontWeight="bold">
                  {item.label}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
