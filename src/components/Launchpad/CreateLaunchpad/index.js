// eslint-disable-next-line
import React from 'react';
import TokenDetails from './tokenDetails';
import LaunchpadStepper from '../../LaunchpadStepper/launchpadStepper';
import ProjectDetails from './projectDetails';
import VerfiyDetails from './verfiyDetails';
import KybVerification from './kybVerification';

const CreateLaunchpad = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div className='mx-0 mx-lg-3 mx-md-3 pb-5'>
            <div className='row row-cols-1 text-dark-to-light mt-3 project-layout g-4'>
                <div className='d-flex flex-column flex-lg-row'>
                    <LaunchpadStepper
                        activeStep={activeStep}
                        completed={completed}
                    />
                </div>
            </div>

            {activeStep === 0 ? (
                <KybVerification handleComplete={handleComplete} />
            ) : activeStep === 1 ? (
                <TokenDetails
                    handleComplete={handleComplete}
                    handleBack={handleBack}
                />
            ) : activeStep === 2 ? (
                <ProjectDetails
                    handleComplete={handleComplete}
                    handleBack={handleBack}
                />
            ) : (
                <VerfiyDetails handleBack={handleBack} />
            )}
        </div>
    );
};

export default CreateLaunchpad;
