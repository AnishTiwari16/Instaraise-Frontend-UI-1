import React from 'react';
import { AiOutlineCheck, AiOutlineEdit } from 'react-icons/ai';
import { connect } from 'react-redux';

import OwnerInfo from './OwnerInfo';
import { createNewProject } from '../../../redux/actions/selfHostedIDO/action.self';
const AdminDetails = ({ createNewProject, projectData, project }) => {
    const [editWebsite, setEditWebsite] = React.useState(false);
    const DATA = [
        {
            name: 'Token address',
            value: projectData.token.address,
        },
        {
            name: 'Token Id',
            value: projectData.token.ID,
        },
        {
            name: 'Sale Start Time',
            value: new Date(projectData.time.public.start).toString(),
        },
        {
            name: 'Sale End Time',
            value: new Date(projectData.time.public.end).toString(),
        },
        {
            name: 'Description',
            value: projectData.description,
        },
        {
            name: 'Website',
            value: projectData.website,
        },
        {
            name: 'Logo URL',
            value: projectData.icon,
        },
    ];
    return (
        <div className='col-md-12 col-lg mw-100 h-100 py-4 py-md-0 mt-md-4 p-0'>
            <div className='card shadow-sm h-100 border-10'>
                <div className='card-body'>
                    <div className='row'>
                        {DATA.map((elem, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className='col-6 py-3 card-header-border-bottom'>
                                        {elem.name}
                                    </div>
                                    <div className='col-6 text-right py-3 card-header-border-bottom'>
                                        {elem.name === 'Website' &&
                                        editWebsite ? (
                                            <div className='d-flex'>
                                                <input
                                                    type='text'
                                                    className='w-100 text-dark-to-light token-information text-14 rounded p-2 mr-2'
                                                    placeholder={
                                                        project.website
                                                            ? project.website
                                                            : elem.value
                                                    }
                                                    onChange={(e) =>
                                                        createNewProject({
                                                            ...project,
                                                            website:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                                <div className='my-auto'>
                                                    <AiOutlineCheck
                                                        onClick={() =>
                                                            setEditWebsite(
                                                                !editWebsite
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        ) : elem.name === 'Website' &&
                                          !editWebsite ? (
                                            <>
                                                <span className='pr-2'>
                                                    {project.website
                                                        ? project.website
                                                        : elem.value}
                                                </span>
                                                <AiOutlineEdit
                                                    onClick={() =>
                                                        setEditWebsite(
                                                            !editWebsite
                                                        )
                                                    }
                                                />
                                            </>
                                        ) : (
                                            elem.value
                                        )}
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                    <div className='card-header-border-bottom'>
                        <OwnerInfo />
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminDetails);
