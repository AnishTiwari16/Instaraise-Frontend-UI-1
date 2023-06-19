// eslint-disable-next-line
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import React from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { connect } from 'react-redux';

import { createNewProject } from '../../../redux/actions/selfHostedIDO/action.self';

const TokenDetails = ({
    handleComplete,
    handleBack,
    createNewProject,
    project,
}) => {
    return (
        <div className='card pool shadow-sm h-100 border-10 mt-5'>
            <div className='card-body'>
                <p className='text-g text-center pb-3'>
                    Enter the details below
                </p>

                <div id='accordion' className='pb-4 bg-white'>
                    <div className='card'>
                        <div
                            className='card-header card-header-border-bottom bg-white'
                            id='headingOne'
                        >
                            <h5 className='mb-0'>
                                <button
                                    className='accordion-button btn-link px-0 bg-white'
                                    data-toggle='collapse'
                                    data-target='#collapseOne1'
                                    aria-expanded='true'
                                    aria-controls='collapseOne1'
                                >
                                    <span className='text-dark-to-light'>
                                        Token details
                                    </span>
                                </button>
                            </h5>
                        </div>

                        <div
                            id='collapseOne1'
                            className='collapse show'
                            aria-labelledby='headingOne'
                            data-parent='#accordion'
                        >
                            <div className='card-body'>
                                <div className='form-group-2 text-start'>
                                    <label
                                        htmlFor='validationServer02'
                                        className='form-label text-start text-dark-to-light'
                                    >
                                        Token address
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='KT1'
                                        className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                        id='validationServer02'
                                        name='description'
                                        value={project.tokenAddress}
                                        onChange={(e) =>
                                            createNewProject({
                                                ...project,
                                                tokenAddress: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                    <div className='invalid-feedback'></div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Decimals
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='banner'
                                            value={project.decimals}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    decimals: e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        token Id
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='tokenID'
                                            value={project.tokenId}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    tokenId: e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Total raise
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='tokenID'
                                            placeholder='USD'
                                            value={project.totalRaise}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    totalRaise: e.target.value,
                                                })
                                            }
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div
                            className='card-header card-header-border-bottom bg-white'
                            id='headingThree'
                        >
                            <h5 className='mb-0'>
                                <button
                                    className='accordion-button btn-link px-0 bg-white'
                                    data-toggle='collapse'
                                    data-target='#collapseThree3'
                                    aria-expanded='false'
                                    aria-controls='collapseThree3'
                                >
                                    <span className='text-dark-to-light'>
                                        Private sale details
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div
                            id='collapseThree3'
                            className='collapse'
                            aria-labelledby='headingThree'
                            data-parent='#accordion'
                        >
                            <div className='card-body'>
                                <div className='form-group-2 text-start'>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Private Start Time
                                    </label>
                                    <Datetime
                                        value={project.presaleStartTime}
                                        onChange={(e) =>
                                            createNewProject({
                                                ...project,
                                                presaleStartTime: e._d,
                                            })
                                        }
                                    />

                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        private End Time
                                    </label>
                                    <Datetime
                                        value={project.presaleEndTime}
                                        onChange={(e) =>
                                            createNewProject({
                                                ...project,
                                                presaleEndTime: e._d,
                                            })
                                        }
                                    />
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        private Sale Allocation
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='privateSaleAllocation'
                                            value={
                                                project.privateSaleAllocation
                                            }
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    privateSaleAllocation:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        private Sale Price
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='privateSalePrice'
                                            value={project.privateSalePrice}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    privateSalePrice:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div
                            className='card-header card-header-border-bottom bg-white'
                            id='headingFour'
                        >
                            <h5 className='mb-0'>
                                <button
                                    className='accordion-button btn-link px-0 bg-white'
                                    data-toggle='collapse'
                                    data-target='#collapseFour4'
                                    aria-expanded='false'
                                    aria-controls='collapseFour4'
                                >
                                    <span className='text-dark-to-light'>
                                        Public sale details
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div
                            id='collapseFour4'
                            className='collapse'
                            aria-labelledby='headingFive'
                            data-parent='#accordion'
                        >
                            <div className='card-body'>
                                <div className='form-group-2 text-start'>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        public Start Time
                                    </label>
                                    <Datetime
                                        value={project.publicStartTime}
                                        onChange={(e) =>
                                            createNewProject({
                                                ...project,
                                                publicStartTime: e._d,
                                            })
                                        }
                                    />
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        public End Time
                                    </label>
                                    <Datetime
                                        value={project.publicEndTime}
                                        onChange={(e) =>
                                            createNewProject({
                                                ...project,
                                                publicEndTime: e._d,
                                            })
                                        }
                                    />
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Public max participation
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='publicMaxParticipation'
                                            value={
                                                project.publicMaxParticipation
                                            }
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    publicMaxParticipation:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Public Sale Price
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='publicSalePrice'
                                            value={project.publicSalePrice}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    publicSalePrice:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-header bg-white ' id='headingTwo'>
                            <h5 className='mb-0'>
                                <button
                                    className='accordion-button btn-link px-0 bg-white '
                                    data-toggle='collapse'
                                    data-target='#collapseTwo2'
                                    aria-expanded='false'
                                    aria-controls='collapseTwo2'
                                >
                                    <span className='text-dark-to-light'>
                                        Additional info
                                    </span>
                                </button>
                            </h5>
                        </div>
                        <div
                            id='collapseTwo2'
                            className='collapse'
                            aria-labelledby='headingTwo'
                            data-parent='#accordion'
                        >
                            <div className='card-body'>
                                <div className='form-group-2 text-start'>
                                    <label
                                        htmlFor='validationServer02'
                                        className='form-label text-start text-dark-to-light'
                                    >
                                        Amount to sell
                                    </label>
                                    <input
                                        type='number'
                                        placeholder='some placeholder'
                                        className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                        id='validationServer02'
                                        name='description'
                                        value={project.amountToSell}
                                        onChange={(e) =>
                                            createNewProject({
                                                ...project,
                                                amountToSell: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                    <div className='invalid-feedback'></div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Max Tokens To LP
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='banner'
                                            value={project.maxTokensToLp}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    maxTokensToLp:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        token Unlock Time
                                    </label>
                                    <Datetime
                                        value={project.tokenUnlockTime}
                                        onChange={(e) =>
                                            createNewProject({
                                                ...project,
                                                tokenUnlockTime: e._d,
                                            })
                                        }
                                    />
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Percentage Revenue To LP
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='maxSupply'
                                            value={
                                                project.percentageRevenueToLP
                                            }
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    percentageRevenueToLP:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '1' }}
                                    >
                                        lp Lockup Time
                                    </label>
                                    <Datetime
                                        value={project.lpLockupTime}
                                        onChange={(e) =>
                                            createNewProject({
                                                ...project,
                                                lpLockupTime: e._d,
                                            })
                                        }
                                    />
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        token DEX Price
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='homepage'
                                            value={project.tokenDexPrice}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    tokenDexPrice:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        staking Contract
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='text'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='stakingContract'
                                            value={project.stakingContract}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    stakingContract:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        timeBlock
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='timeBlock'
                                            value={project.timeBlock}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    timeBlock: e.target.value,
                                                })
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <div className='pt-4'>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id='demo-select-small-label'>
                                                Whitelist for public sale
                                            </InputLabel>

                                            <Select
                                                labelId='demo-select-small-label'
                                                id='demo-select-small'
                                                value={
                                                    project.isPublicSaleWhitelisted
                                                }
                                                label='Whitelist for public sale'
                                                onChange={(e) =>
                                                    createNewProject({
                                                        ...project,
                                                        isPublicSaleWhitelisted:
                                                            e.target.value,
                                                    })
                                                }
                                            >
                                                <MenuItem value={true}>
                                                    True
                                                </MenuItem>
                                                <MenuItem value={false}>
                                                    False
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className='pt-4'>
                                        <FormControl fullWidth size='small'>
                                            <InputLabel id='demo-select-small-label'>
                                                Sale type
                                            </InputLabel>

                                            <Select
                                                labelId='demo-select-small-label'
                                                id='demo-select-small'
                                                value={project.saleType}
                                                label='Sale type'
                                                onChange={(e) =>
                                                    createNewProject({
                                                        ...project,
                                                        saleType:
                                                            e.target.value,
                                                    })
                                                }
                                            >
                                                <MenuItem value={true}>
                                                    Private
                                                </MenuItem>
                                                <MenuItem value={false}>
                                                    Public
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        disabled={
                            !project.tokenAddress ||
                            !project.privateSaleAllocation ||
                            !project.privateSalePrice ||
                            !project.publicMaxParticipation ||
                            !project.publicSalePrice ||
                            !project.amountToSell ||
                            !project.maxTokensToLp ||
                            !project.percentageRevenueToLP ||
                            !project.tokenDexPrice ||
                            !project.stakingContract ||
                            !project.timeBlock ||
                            !project.totalRaise
                        }
                        className='sale-button btn px-5 shadow-sm button-primary'
                        onClick={handleComplete}
                    >
                        Next
                    </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(TokenDetails);
