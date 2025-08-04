import * as React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';

export default function CostSummaryCard() {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        p: 2,
        borderRadius: '8px',
        backgroundColor: 'white',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          gap: 4,
        }}
      >
        {/* Total Cost */}
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Dubai, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal', // Medium maps to normal style + fontWeight 500
              fontSize: '16px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Total Cost
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Dubai, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '24px',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            $100.00
          </Typography>
        </Box>

        {/* Vertical Divider */}
        <Divider orientation="vertical" flexItem />

        {/* Repacking Cost */}
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Dubai, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '16px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Repacking/Consolidation
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Dubai, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '24px',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            $10.00
          </Typography>
        </Box>

        {/* Vertical Divider */}
        <Divider orientation="vertical" flexItem />

        {/* Total Shipping Cost */}
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: 'Dubai, sans-serif',
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '16px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            Total Shipping Cost
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Dubai, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: '26px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#0057B8',
            }}
          >
            $510.00
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
