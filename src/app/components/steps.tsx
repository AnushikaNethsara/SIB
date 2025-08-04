'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const steps = [
    "Create Shipment",
    "Repacking & Consolidation",
    "Shipment Details",
    "Shipping Method",
    "Summary & Confirmation"
];

// ✅ Custom Step Icon
const CustomStepIcon = (props: any) => {
    const { active, completed, icon } = props;

    if (completed) {
        return (
            <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 24 }} />
        );
    }

    return (
        <Box
            sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: active ? '#1976d2' : '#e0e0e0',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {icon}
        </Box>
    );
};

export default function HorizontalLinearStepper() {
    const [activeStep] = React.useState(4);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // true for <600px

    return (
        <Box sx={{ width: '100%', my: 6 }}>
            <Stepper
                activeStep={activeStep}
                alternativeLabel={!isMobile} // horizontal with labels for desktop
                orientation={isMobile ? 'vertical' : 'horizontal'} // switch layout
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
