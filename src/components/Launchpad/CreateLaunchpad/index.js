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
    const [projectName, setProjectName] = React.useState('');
    const [tokenName, setTokenName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [logoURL, setLogoURL] = React.useState('');
    const [telegram, setTelegram] = React.useState('');
    const [twitter, setTwitter] = React.useState('');
    const [websiteLink, setWebsiteLink] = React.useState('');
    const [github, setGithub] = React.useState('');
    const [medium, setMedium] = React.useState('');
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
                <KybVerification
                    handleComplete={handleComplete}
                    handleBack={handleBack}
                />
            ) : activeStep === 1 ? (
                <TokenDetails
                    handleComplete={handleComplete}
                    handleBack={handleBack}
                />
            ) : activeStep === 2 ? (
                <ProjectDetails
                    setDescription={setDescription}
                    setProjectName={setProjectName}
                    setTokenName={setTokenName}
                    setLogoURL={setLogoURL}
                    setTelegram={setTelegram}
                    setTwitter={setTwitter}
                    setWebsiteLink={setWebsiteLink}
                    setGithub={setGithub}
                    setMedium={setMedium}
                    handleComplete={handleComplete}
                    handleBack={handleBack}
                />
            ) : (
                <VerfiyDetails
                    projectName={projectName}
                    tokenName={tokenName}
                    handleBack={handleBack}
                    description={description}
                    logoURL={logoURL}
                    telegram={telegram}
                    twitter={twitter}
                    websiteLink={websiteLink}
                    github={github}
                    medium={medium}
                />
            )}
        </div>
    );
};

export default CreateLaunchpad;
