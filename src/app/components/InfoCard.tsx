'use client';
import * as React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';

// Reusable Row Component
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <Box sx={{ pb: 2 }}>
    {/* Label */}
    <Typography
      sx={{
        fontFamily: 'Circular Std, sans-serif',
        fontWeight: 450,
        fontStyle: 'normal', // 'Book'
        fontSize: '16px',
        lineHeight: '150%',
        letterSpacing: '0%',
      }}
    >
      {label}
    </Typography>

    {/* Value */}
    <Typography
      sx={{
        fontFamily: 'Circular Std, sans-serif',
        fontWeight: 450,
        fontStyle: 'normal',
        fontSize: '14px',
        lineHeight: '150%',
        letterSpacing: '0%',
        color: 'text.secondary',
      }}
    >
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
    { label: 'Country', value: 'United States' },
  ];

  return (
    <Card sx={{ height: '100%', width: '100%', p: 2, borderRadius: '8px' }}>
      <CardContent>
        {/* Title */}
        <Typography
          sx={{
            fontFamily: 'Dubai, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal', // Bold handled by fontWeight
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%',
            mb: 2,
          }}
        >
          Consignee Details
        </Typography>

        {/* Render rows dynamically */}
        {details.map((item) => (
          <InfoRow key={item.label} label={item.label} value={item.value} />
        ))}

        {/* Last row: State, City, Zip */}
        <Box sx={{ pt: 1 }}>
          <div className="grid grid-cols-3 gap-14">
            {[{ label: 'State', value: 'California' },
              { label: 'City', value: 'Los Angeles' },
              { label: 'Zip', value: '90001' },
            ].map((item) => (
              <div key={item.label}>
                {/* Label */}
                <Typography
                  sx={{
                    fontFamily: 'Circular Std, sans-serif',
                    fontWeight: 450,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  {item.label}
                </Typography>

                {/* Value */}
                <Typography
                  sx={{
                    fontFamily: 'Circular Std, sans-serif',
                    fontWeight: 450,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                    color: 'text.secondary',
                  }}
                >
                  {item.value}
                </Typography>
              </div>
            ))}
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
