// eslint-disable-next-line
import React from 'react';
import {
    Box,
    Step,
    StepButton,
    Stepper,
    useMediaQuery,
    useTheme,
} from '@mui/material';
const steps = [
    'Complete KYB',
    'Token details',
    'Product details',
    'Verify and confirm',
];
const LaunchpadStepper = ({ activeStep, completed }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper
                nonLinear
                activeStep={activeStep}
                orientation={isMobile ? 'vertical' : 'horizontal'}
            >
                {steps.map((label, index) => (
                    <Step
                        key={label}
                        completed={completed[index]}
                        sx={{
                            '& .MuiStepLabel-root .Mui-completed': {
                                color: '#6142ec', // circle color (COMPLETED)
                            },
                            '& .MuiStepLabel-root .Mui-active': {
                                color: '#6142ec', // circle color (ACTIVE)
                            },

                            '& .css-1vyamtt-MuiStepLabel-labelContainer': {
                                color: '#4e5d78',
                            },
                        }}
                    >
                        <StepButton color='inherit'>
                            <span className='text-g'>{label}</span>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default LaunchpadStepper;
