// eslint-disable-next-line
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { connect } from 'react-redux';

import { createNewProject } from '../../../redux/actions/selfHostedIDO/action.self';

const TokenDetails = ({
    handleComplete,
    // handleBack,
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
                                        Sale details
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
                                        Start time
                                    </label>
                                    <div className='text-dark-to-light text-14 token-information input-bar form-control rounded'>
                                        <DatePicker
                                            selected={project.publicStartTime}
                                            onChange={(e) => {
                                                createNewProject({
                                                    ...project,
                                                    publicStartTime: e,
                                                });
                                            }}
                                            minDate={new Date()}
                                            showTimeSelect
                                            dateFormat='MMMM d, yyyy h:mm'
                                            timeIntervals={5}
                                            onKeyDown={(e) => {
                                                e.preventDefault();
                                            }}
                                        />
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        End time
                                    </label>
                                    <div className='text-dark-to-light text-14 token-information input-bar form-control rounded'>
                                        <DatePicker
                                            selected={project.publicEndTime}
                                            onChange={(e) => {
                                                createNewProject({
                                                    ...project,
                                                    publicEndTime: e,
                                                });
                                            }}
                                            minDate={new Date()}
                                            showTimeSelect
                                            dateFormat='MMMM d, yyyy h:mm'
                                            timeIntervals={5}
                                            onKeyDown={(e) => {
                                                e.preventDefault();
                                            }}
                                        />
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Max participation
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
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Price
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
                                            placeholder='price'
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
                                        placeholder='amount to sell'
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
                                            placeholder='max tokens'
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
                                    <div className='text-dark-to-light text-14 token-information input-bar form-control rounded'>
                                        <DatePicker
                                            selected={project.tokenUnlockTime}
                                            onChange={(e) => {
                                                createNewProject({
                                                    ...project,
                                                    tokenUnlockTime: e,
                                                });
                                            }}
                                            minDate={new Date()}
                                            showTimeSelect
                                            dateFormat='MMMM d, yyyy h:mm'
                                            timeIntervals={5}
                                            onKeyDown={(e) => {
                                                e.preventDefault();
                                            }}
                                        />
                                    </div>
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
                                            placeholder='Percentage for revenue'
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
                                    <div className='text-dark-to-light text-14 token-information input-bar form-control rounded'>
                                        <DatePicker
                                            selected={project.lpLockupTime}
                                            onChange={(e) => {
                                                createNewProject({
                                                    ...project,
                                                    lpLockupTime: e,
                                                });
                                            }}
                                            minDate={new Date()}
                                            showTimeSelect
                                            dateFormat='MMMM d, yyyy h:mm'
                                            timeIntervals={5}
                                            onKeyDown={(e) => {
                                                e.preventDefault();
                                            }}
                                        />
                                    </div>
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
                                            placeholder='DEX price'
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
                                            placeholder='stacking contract address'
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
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Min allocation
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='timeBlock'
                                            value={project.minAllocation}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    minAllocation:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder='minimum allocation amount'
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
                                        Max allocation
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='timeBlock'
                                            value={project.maxAllocation}
                                            onChange={(e) =>
                                                createNewProject({
                                                    ...project,
                                                    maxAllocation:
                                                        e.target.value,
                                                })
                                            }
                                            placeholder='maximum allocation amount'
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-end py-2'>
                    {/* <button
                        className='sale-button btn px-5 shadow-sm button-primary'
                        onClick={handleBack}
                    >
                        Back
                    </button> */}

                    <button
                        disabled={
                            !project.tokenAddress ||
                            !project.publicMaxParticipation ||
                            !project.publicSalePrice ||
                            !project.amountToSell ||
                            !project.maxTokensToLp ||
                            !project.percentageRevenueToLP ||
                            !project.tokenDexPrice ||
                            !project.stakingContract ||
                            !project.timeBlock ||
                            !project.totalRaise ||
                            !project.minAllocation ||
                            !project.maxAllocation
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
