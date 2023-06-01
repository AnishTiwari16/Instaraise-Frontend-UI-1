// eslint-disable-next-line
import React from 'react';
import { Box, Step, StepButton, Stepper } from '@mui/material';

const steps = [
    'Complete KYB',
    'Token sale details',
    'Product details',
    'Verify and confirm',
];
const LaunchpadStepper = ({ activeStep, completed }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
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
