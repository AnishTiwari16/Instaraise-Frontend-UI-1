// eslint-disable-next-line
import React from 'react';
import TokenDetails from './tokenDetails';
import LaunchpadStepper from '../../LaunchpadStepper/launchpadStepper';
import ProjectDetails from './projectDetails';
import VerfiyDetails from './verfiyDetails';

const CreateLaunchpad = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
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
                <TokenDetails
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    completed={completed}
                    setCompleted={setCompleted}
                />
            ) : activeStep === 1 ? (
                <ProjectDetails
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                    completed={completed}
                    setCompleted={setCompleted}
                />
            ) : (
                <VerfiyDetails setActiveStep={setActiveStep} />
            )}
        </div>
    );
};

export default CreateLaunchpad;
