import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { connect } from 'react-redux';

import { addWhitelistedUsers } from '../../../redux/actions/selfHostedIDO/action.self';

const OwnerInfo = ({ addWhitelistedUsers, whitelistUsersLoader }) => {
    const [whitelistUsersAddr, setWhitelistedUsersAddr] = React.useState('');
    return (
        <div>
            <div className='d-flex justify-content-between py-3'>
                User whitelisted
                <div className=''>[]</div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type='button'
                    className='sale-button btn px-4 mb-3 shadow-sm button-primary'
                    data-toggle='modal'
                    data-target='#exampleModalCenter'
                >
                    Add users to whitelist
                </button>
            </div>

            <div
                className='modal fade'
                id='exampleModalCenter'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='exampleModalCenterTitle'
                aria-hidden='true'
            >
                <div
                    className='modal-dialog modal-dialog-centered'
                    role='document'
                >
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5
                                className='modal-title'
                                id='exampleModalLongTitle'
                            >
                                Add users to whitelist
                            </h5>
                            <button
                                type='button'
                                className='close'
                                data-dismiss='modal'
                                aria-label='Close'
                            >
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <div className='form-group'>
                                <label
                                    htmlFor='message-text'
                                    className='col-form-label'
                                >
                                    Users
                                </label>
                                <textarea
                                    className='form-control'
                                    id='message-text'
                                    onChange={(e) =>
                                        setWhitelistedUsersAddr(e.target.value)
                                    }
                                ></textarea>
                            </div>
                        </div>
                        <div className='modal-footer border-top-0'>
                            <button
                                type='button'
                                className='sale-button btn w-30 px-4 shadow-sm button-primary'
                                onClick={() =>
                                    addWhitelistedUsers(whitelistUsersAddr)
                                }
                            >
                                {whitelistUsersLoader ? (
                                    <div className='rotate-2'>
                                        <BiLoaderAlt size={20} />
                                    </div>
                                ) : (
                                    'Add users'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    addWhitelistedUsers: (payload) => dispatch(addWhitelistedUsers(payload)),
});
const mapStateToProps = (state) => ({
    whitelistUsersLoader: state.whitelistUsersLoader,
});
export default connect(mapStateToProps, mapDispatchToProps)(OwnerInfo);
