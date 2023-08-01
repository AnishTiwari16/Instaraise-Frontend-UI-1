// eslint-disable-next-line
import React from 'react';
import { AiOutlineCheck, AiOutlineEdit } from 'react-icons/ai';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import OwnerInfo from './OwnerInfo';
import { PROJECT_DETAILS_API_URL } from '../../../config/config';
import {
    IdoProjectDetails,
    createNewProject,
    finaliseSale,
    lockupLiquidity,
} from '../../../redux/actions/selfHostedIDO/action.self';
import MainModal from '../../Modals';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeContext } from '../../../routes/root';
import Countdown from 'react-countdown';

const AdminDetails = ({
    createNewProject,
    IdoProjectDetails,
    lockupLiquidity,
    project,
    projectData,
    finaliseSale,
    finialiseLoader,
    lockUpLiquidityLoader,
}) => {
    const { theme } = React.useContext(ThemeContext);
    const [editDescription, setEditDescription] = React.useState(false);
    const [editWebsite, setEditWebsite] = React.useState(false);
    const [editLogo, setEditLogo] = React.useState(false);
    const [modalType, setModalType] = React.useState(null);
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
            name: 'Token unlock time',
            value: new Date(projectData.time.tokenUnlock).toString(),
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
    const handleLockUpLiquidity = async () => {
        const resp = await lockupLiquidity({
            tokenPoolAddress: projectData.tokenPoolAddress,
        });
        if (!resp.payload.success) {
            setModalType('error');
        } else {
            toast('Lockup successfull 🎉');
        }
    };
    const handleFinalseSale = async () => {
        const resp = await finaliseSale({
            tokenPoolAddress: projectData.tokenPoolAddress,
            tokenAddress: projectData.token.address,
            tokenId: projectData.token.ID,
        });
        if (!resp.payload.success) {
            setModalType('error');
        } else {
            toast('Pool finalised 🎉');
        }
    };
    let UNLOCK_TOKEN_DATE =
        new Date() <= new Date(projectData.time.tokenUnlock);
    return (
        <>
            <MainModal
                setModalType={setModalType}
                modalType={modalType}
                type='error'
            />
            <ToastContainer
                position='bottom-right'
                autoClose={6000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                theme={!theme ? 'dark' : 'light'}
                progressStyle={{
                    backgroundColor: '#5a1eab',
                }}
                pauseOnHover
            />
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
                                                                    e.target
                                                                        .value,
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
                                                                    e.target
                                                                        .value,
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
                                                            setEditLogo(
                                                                !editLogo
                                                            )
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
                                                                    e.target
                                                                        .value,
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
                        <div className='pt-3 card-header-border-bottom'>
                            <OwnerInfo
                                tokenPoolAddress={projectData.tokenPoolAddress}
                                whitelistUsers={projectData.whitelist.public}
                            />
                        </div>
                        <div className='py-3 card-header-border-bottom'>
                            <div className='row'>
                                <div className='col-6 pt-2'>
                                    Lockup liquidity
                                </div>
                                <div className='col-6 text-right pt-1'>
                                    <button
                                        type='button'
                                        className={`shadow-sm ${
                                            UNLOCK_TOKEN_DATE
                                                ? 'disable-b '
                                                : 'connect-wallet-button'
                                        } px-3 btn`}
                                        onClick={() => {
                                            if (!UNLOCK_TOKEN_DATE) {
                                                handleLockUpLiquidity();
                                            }
                                        }}
                                    >
                                        {'Lockup'}
                                        {UNLOCK_TOKEN_DATE && (
                                            <>
                                                {' in '}
                                                <Countdown
                                                    date={new Date(
                                                        projectData.time.tokenUnlock
                                                    ).getTime()}
                                                />
                                            </>
                                        )}
                                        {lockUpLiquidityLoader && (
                                            <div
                                                className='spinner-border spinner-border-sm ml-2'
                                                role='status'
                                            >
                                                <span className='sr-only'>
                                                    Loading...
                                                </span>
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='text-start alert alert-warning p-1 m-0 text-mini mt-4'>
                            *It should be noted that once you finialse sale,
                            tokens will be deposited and the sale will start
                            immediately once the transaction is approved.
                        </div>
                        <div className='pt-2'>
                            <span
                                data-toggle='tooltip'
                                data-placement='top'
                                title='Add users to whitelist before finalizing'
                            >
                                <button
                                    type='button'
                                    className={`shadow-none w-100 ${
                                        projectData.status !== 0 ||
                                        (projectData.whitelist.public.length ===
                                            0 &&
                                            new Date() >=
                                                new Date(
                                                    projectData.time.public.end
                                                ))
                                            ? 'disable-b'
                                            : 'connect-wallet-button'
                                    } px-3 btn`}
                                    onClick={() => {
                                        if (
                                            projectData.status === 0 ||
                                            (projectData.whitelist.public
                                                .length > 0 &&
                                                new Date() <=
                                                    new Date(
                                                        projectData.time.public.end
                                                    ))
                                        ) {
                                            handleFinalseSale();
                                        }
                                    }}
                                >
                                    {finialiseLoader ? (
                                        <div
                                            className='spinner-border spinner-border-sm'
                                            role='status'
                                        >
                                            <span className='sr-only'>
                                                Loading...
                                            </span>
                                        </div>
                                    ) : (
                                        'Finalise pool'
                                    )}
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const mapDispatchToProps = (dispatch) => ({
    createNewProject: (payload) => dispatch(createNewProject(payload)),
    IdoProjectDetails: (payload) => dispatch(IdoProjectDetails(payload)),
    finaliseSale: (payload) => dispatch(finaliseSale(payload)),
    lockupLiquidity: (payload) => dispatch(lockupLiquidity(payload)),
});
const mapStateToProps = (state) => ({
    project: state.project,
    finialiseLoader: state.finialiseLoader,
    lockUpLiquidityLoader: state.lockUpLiquidityLoader,
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminDetails);