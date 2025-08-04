'use client';
import * as React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import shippingIcon from '../../../public/waga.png';

// Reusable Row Component
const InfoRow = ({ label, value, icon }: { label: string; value: string; icon?: StaticImageData }) => (
  <Box sx={{ pb: 2 }}>
    <Typography variant="body1" fontWeight="bold">
      {label}
    </Typography>
    {icon ? (
      <Box sx={{ mt: 1 }}>
        <Image alt="icon" src={icon} width={150} height={150} />
      </Box>
    ) : (
      <Typography variant="subtitle2" color="text.secondary">
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
    { label: 'Price', value: '$20.00' }
  ];

  return (
    <Card sx={{ width: 800, mx: 'auto', p: 2, borderRadius: '8px' }}>
      <CardContent>
        {/* Title */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
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
