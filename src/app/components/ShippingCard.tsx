'use client';
import * as React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import shippingIcon from '../../../public/waga.png';

// Reusable Row Component
const InfoRow = ({ label, value, icon }: { label: string; value: string; icon?: StaticImageData }) => (
  <Box sx={{ pb: 2 }}>
    {/* Label */}
    <Typography
      sx={{
        fontFamily: 'Circular Std, sans-serif',
        fontWeight: 450,
        fontStyle: 'normal', // Book
        fontSize: '16px',
        lineHeight: '150%',
        letterSpacing: '0%',
      }}
    >
      {label}
    </Typography>

    {icon ? (
      <Box sx={{ mt: 1 }}>
        <Image alt="icon" src={icon} width={150} height={150} />
      </Box>
    ) : (
      // Value
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
    )}
    <Divider sx={{ mt: 2 }} />
  </Box>
);

export default function ShippingCard() {
  const details = [
    { label: 'Method Name', value: 'Air Freight' },
    { label: 'Shipping Date', value: 'Standard', icon: shippingIcon },
    { label: 'Carrier', value: 'john.carter@example.com' },
    { label: 'ETA', value: 'JUL-03-2025' },
    { label: 'Price', value: '$20.00' },
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
          Shipping Details
        </Typography>

        {/* Render rows dynamically */}
        {details.map(({ label, value, icon }) => (
          <InfoRow key={label} label={label} value={value} icon={icon} />
        ))}
      </CardContent>
    </Card>
  );
}
