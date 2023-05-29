// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import {
    projectName,
    tokenName,
} from '../../../redux/actions/selfHostedIdo/action.selfHostedIdo';
const ProjectDetails = ({
    activeStep,
    completed,
    setCompleted,
    setActiveStep,
    projectNameReducer,
    projectName,
    tokenName,
    tokenNameReducer,
}) => {
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
        <div className='card pool shadow-sm h-100 border-10 mt-5'>
            <div className='card-body'>
                <div className='row g-3'>
                    <div className='col-md-6'>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='form-label text-start text-dark-to-light'
                            >
                                Project Name
                            </label>
                            <input
                                type='text'
                                placeholder='some placeholder'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='name'
                                value={projectNameReducer}
                                onChange={(e) => projectName(e.target.value)}
                                required
                            />
                        </div>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer02'
                                className='form-label text-start text-dark-to-light'
                            >
                                Description
                            </label>
                            <textarea
                                type='text'
                                style={{ height: '15vh' }}
                                placeholder='Some placeholder'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer02'
                                name='description'
                                // value={description}
                                // onChange={(e) => setDescription(e.target.value)}
                                required
                            />

                            <div className='invalid-feedback'></div>
                        </div>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='form-label text-start text-dark-to-light'
                            >
                                Telegram
                            </label>
                            <input
                                type='text'
                                placeholder='tzkt'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='name'
                                // value={adminAddress}
                                // onChange={(e) =>
                                //     setAdminAddress(e.target.value)
                                // }
                                required
                            />
                        </div>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='form-label text-start text-dark-to-light'
                            >
                                Twitter
                            </label>
                            <input
                                type='text'
                                placeholder='tzkt'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='name'
                                // value={adminAddress}
                                // onChange={(e) =>
                                //     setAdminAddress(e.target.value)
                                // }
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='form-label text-start text-dark-to-light'
                            >
                                Token name
                            </label>
                            <input
                                type='text'
                                placeholder='some placeholder'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='name'
                                value={tokenNameReducer}
                                onChange={(e) => tokenName(e.target.value)}
                                required
                            />
                        </div>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='form-label text-start text-dark-to-light'
                            >
                                Logo URL
                            </label>
                            <input
                                type='text'
                                placeholder='some placeholder'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='name'
                                // value={adminAddress}
                                // onChange={(e) =>
                                //     setAdminAddress(e.target.value)
                                // }
                                required
                            />
                        </div>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='form-label text-start text-dark-to-light'
                            >
                                Website
                            </label>
                            <input
                                type='text'
                                placeholder='tzkt'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='name'
                                // value={adminAddress}
                                // onChange={(e) =>
                                //     setAdminAddress(e.target.value)
                                // }
                                required
                            />
                        </div>

                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='form-label text-start text-dark-to-light'
                            >
                                Medium
                            </label>
                            <input
                                type='text'
                                placeholder='tzkt'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='name'
                                // value={adminAddress}
                                // onChange={(e) =>
                                //     setAdminAddress(e.target.value)
                                // }
                                required
                            />
                        </div>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='form-label text-start text-dark-to-light'
                            >
                                Github
                            </label>
                            <input
                                type='text'
                                placeholder='tzkt'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='name'
                                // value={adminAddress}
                                // onChange={(e) =>
                                //     setAdminAddress(e.target.value)
                                // }
                                required
                            />
                        </div>
                    </div>

                    <div className='d-flex justify-content-between py-2'>
                        <button
                            // disabled={!tokenAddress}
                            className='sale-button btn px-5 shadow-sm button-primary'
                            onClick={handleBack}
                        >
                            Back
                        </button>

                        <button
                            // disabled={!tokenAddress}
                            className='sale-button btn px-5 shadow-sm button-primary'
                            onClick={handleComplete}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    projectName: (payload) => dispatch(projectName(payload)),
    tokenName: (payload) => dispatch(tokenName(payload)),
});
const mapStateToProps = (state) => ({
    projectNameReducer: state.projectNameReducer,
    tokenNameReducer: state.tokenNameReducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
