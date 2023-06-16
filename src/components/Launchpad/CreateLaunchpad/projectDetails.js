// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { createNewProject } from '../../../redux/actions/selfHostedIDO/action.self';

const ProjectDetails = ({
    handleComplete,
    handleBack,
    project,
    createNewProject,
}) => {
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
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='name'
                                value={project.projectName}
                                onChange={(e) =>
                                    createNewProject({
                                        ...project,
                                        projectName: e.target.value,
                                    })
                                }
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
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer02'
                                name='description'
                                value={project.description}
                                onChange={(e) =>
                                    createNewProject({
                                        ...project,
                                        description: e.target.value,
                                    })
                                }
                                required
                            />

                            <div className='invalid-feedback'></div>
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
                                placeholder='https://ipfs'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='Logo'
                                value={project.logoURL}
                                onChange={(e) =>
                                    createNewProject({
                                        ...project,
                                        logoURL: e.target.value,
                                    })
                                }
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
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='name'
                                value={project.website}
                                onChange={(e) =>
                                    createNewProject({
                                        ...project,
                                        website: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='text-start text-dark-to-light'
                            >
                                Telegram
                            </label>
                            <input
                                type='text'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='Telegram'
                                value={project.telegram}
                                onChange={(e) =>
                                    createNewProject({
                                        ...project,
                                        telegram: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='text-start text-dark-to-light'
                            >
                                Twitter
                            </label>
                            <input
                                type='text'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='Twitter'
                                value={project.twitter}
                                onChange={(e) =>
                                    createNewProject({
                                        ...project,
                                        twitter: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='text-start text-dark-to-light'
                            >
                                Medium
                            </label>
                            <input
                                type='text'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='Medium'
                                value={project.medium}
                                onChange={(e) =>
                                    createNewProject({
                                        ...project,
                                        medium: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className='form-group-2 text-start'>
                            <label
                                htmlFor='validationServer01'
                                className='text-start text-dark-to-light'
                            >
                                Github
                            </label>
                            <input
                                type='text'
                                className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                id='validationServer01'
                                name='Github'
                                value={project.github}
                                onChange={(e) =>
                                    createNewProject({
                                        ...project,
                                        github: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className='d-flex justify-content-between py-2'>
                        <button
                            className='sale-button btn px-5 shadow-sm button-primary'
                            onClick={handleBack}
                        >
                            Back
                        </button>

                        <button
                            className='sale-button btn px-5 shadow-sm button-primary'
                            onClick={handleComplete}
                            disabled={
                                !project.projectName ||
                                !project.logoURL ||
                                !project.description ||
                                !project.website
                            }
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
    createNewProject: (payload) => dispatch(createNewProject(payload)),
});
const mapStateToProps = (state) => ({
    project: state.project,
});
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
