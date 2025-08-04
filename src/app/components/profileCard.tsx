import * as React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import Image from 'next/image';
import userIcon from '../../../public/user.png';
import companyIcon from '../../../public/building.png';
import unitIcon from '../../../public/menu.png';

const data = [
  {
    image: userIcon,
    title: 'Customer name',
    subtitle: 'Adedamola Olarele',
  },
  {
    image: companyIcon,
    title: 'Business name',
    subtitle: 'Dolf Technologies',
  },
  {
    image: unitIcon,
    title: 'Unit no.',
    subtitle: '1E',
  },
];

export default function ProfileCard() {
  return (
    <Card sx={{ mx: 'auto', p: 2, width: '100%' }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {data.map(({ image, title, subtitle }, index) => (
            <React.Fragment key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                {/* Circle border wrapper with image inside */}
                <Box
                  sx={{
                    mr: 2,
                  }}
                >
                 <Image
                    src={image}
                    alt={title}
                    width={48}
                    height={48}
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {title}
                  </Typography>
                  <Typography variant="body2" component="div" fontWeight="bold">
                    {subtitle}
                  </Typography>
                </Box>
              </Box>

              {/* Vertical divider except after last item */}
              {index < data.length - 1 && (
                <Box
                  sx={{
                    width: '1px',
                    height: 48,
                    bgcolor: 'divider',
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
