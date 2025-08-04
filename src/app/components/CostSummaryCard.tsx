import * as React from 'react';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';

export default function CostSummaryCard() {
  return (
    <Card sx={{ maxWidth: 700, mx: 'auto', p: 2, borderRadius: '8px', }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Total Cost */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Total Cost
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              $100
            </Typography>
          </Box>

          {/* Vertical Divider */}
          <Divider orientation="vertical" flexItem />

          {/* Repacking Cost */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Repacking Cost
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              $20
            </Typography>
          </Box>

          {/* Total Shipping Cost (no divider) */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Total Shipping Cost
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              $120
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
