// eslint-disable-next-line
import React from 'react';
import { AiOutlineCheck, AiOutlineEdit } from 'react-icons/ai';
import { connect } from 'react-redux';

import OwnerInfo from './OwnerInfo';
import { PROJECT_DETAILS_API_URL } from '../../../config/config';
import {
    IdoProjectDetails,
    createNewProject,
} from '../../../redux/actions/selfHostedIDO/action.self';

const AdminDetails = ({
    createNewProject,
    IdoProjectDetails,
    project,
    projectData,
}) => {
    const [editDescription, setEditDescription] = React.useState(false);
    const [editWebsite, setEditWebsite] = React.useState(false);
    const [editLogo, setEditLogo] = React.useState(false);
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
    const handleUpdate = async () => {
        //updating the data in the DB
        try {
            await fetch(PROJECT_DETAILS_API_URL, {
                method: 'POST',
                body: JSON.stringify({
                    website: project.website
                        ? project.website
                        : projectData.website,
                    icon: project.logoURL ? project.logoURL : projectData.icon,
                    projectName: projectData.projectName,
                    tokenPoolAddress: projectData.tokenPoolAddress,
                    minAllocation: projectData.minAllocation,
                    email: projectData.email,
                    telegram: projectData.telegram,
                    state: projectData.state,
                    twitter: projectData.twitter,
                    totalRaise: projectData.totalRaise,
                    adminAddress: projectData.adminAddress,
                    tokenName: projectData.tokenName,
                    maxAllocation: projectData.maxAllocation,
                    description: project.description
                        ? project.description
                        : projectData.description,
                    id: projectData.id,
                }),
            }).then(async () => {
                await IdoProjectDetails();
            });
        } catch (error) {
            console.log(`Failed to update data : ${error}`);
        }
    };
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
                                                        onClick={() => {
                                                            setEditWebsite(
                                                                !editWebsite
                                                            );
                                                            handleUpdate();
                                                        }}
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
                                        ) : elem.name === 'Logo URL' &&
                                          editLogo ? (
                                            <div className='d-flex'>
                                                <input
                                                    type='text'
                                                    className='w-100 text-dark-to-light token-information text-14 rounded p-2 mr-2'
                                                    placeholder={
                                                        project.logoURL
                                                            ? project.logoURL
                                                            : elem.value
                                                    }
                                                    onChange={(e) =>
                                                        createNewProject({
                                                            ...project,
                                                            logoURL:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                                <div className='my-auto'>
                                                    <AiOutlineCheck
                                                        onClick={() => {
                                                            setEditLogo(
                                                                !editLogo
                                                            );
                                                            handleUpdate();
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ) : elem.name === 'Logo URL' &&
                                          !editLogo ? (
                                            <>
                                                <span className='pr-2'>
                                                    {project.logoURL
                                                        ? project.logoURL
                                                        : elem.value}
                                                </span>
                                                <AiOutlineEdit
                                                    onClick={() =>
                                                        setEditLogo(!editLogo)
                                                    }
                                                />
                                            </>
                                        ) : elem.name === 'Description' &&
                                          editDescription ? (
                                            <div className='d-flex'>
                                                <input
                                                    type='text'
                                                    className='w-100 text-dark-to-light token-information text-14 rounded p-2 mr-2'
                                                    placeholder={
                                                        project.description
                                                            ? project.description
                                                            : elem.value
                                                    }
                                                    onChange={(e) =>
                                                        createNewProject({
                                                            ...project,
                                                            description:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                                <div className='my-auto'>
                                                    <AiOutlineCheck
                                                        onClick={() => {
                                                            setEditDescription(
                                                                !editDescription
                                                            );
                                                            handleUpdate();
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ) : elem.name === 'Description' &&
                                          !editDescription ? (
                                            <>
                                                <span className='pr-2'>
                                                    {project.description
                                                        ? project.description
                                                        : elem.value}
                                                </span>
                                                <AiOutlineEdit
                                                    onClick={() =>
                                                        setEditDescription(
                                                            !editDescription
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
    IdoProjectDetails: (payload) => dispatch(IdoProjectDetails(payload)),
});
const mapStateToProps = (state) => ({
    project: state.project,
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminDetails);
