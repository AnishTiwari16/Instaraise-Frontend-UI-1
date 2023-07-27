// eslint-disable-next-line
import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    IdoProjectDetails,
    addWhitelistedUsers,
} from '../../../redux/actions/selfHostedIDO/action.self';
import { ThemeContext } from '../../../routes/root';
const OwnerInfo = ({
    addWhitelistedUsers,
    IdoProjectDetails,
    whitelistUsersLoader,
    tokenPoolAddress,
    whitelistUsers,
}) => {
    const { theme } = React.useContext(ThemeContext);
    const [whitelistUsersAddr, setWhitelistedUsersAddr] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const handleWhitelistUsers = async () => {
        const data = await addWhitelistedUsers({
            whitelistUsersAddr: whitelistUsersAddr,
            tokenPoolAddress: tokenPoolAddress,
        });
        if (data.payload.success) {
            toast('Address whitelisted successfully 🎉');
            await IdoProjectDetails();
        } else {
            setErrorMessage(data.payload.error.message.replace(/\[0\]\s/, ''));
        }
    };
    const maxLength = 30;
    const truncatedArray = whitelistUsers.map((str) => {
        if (str.length > maxLength) {
            const charactersToShow = maxLength - 3; // Adjust the value -3 if you want to include truncation indicator like "..."
            const startIndex = Math.floor((str.length - charactersToShow) / 2);
            return (
                str.substring(0, startIndex) +
                '...' +
                str.substring(startIndex + charactersToShow)
            );
        }
        return str;
    });
    const result = truncatedArray.join(', ');
    return (
        <div>
            <ToastContainer
                position='bottom-right'
                autoClose={5000}
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

            <div className='row'>
                <div className='col-6'>User whitelisted </div>

                <div className='col-6 text-right'>
                    {!result ? (
                        <button
                            type='button'
                            className='sale-button btn px-4 mb-3 shadow-sm button-primary'
                            data-toggle='modal'
                            data-target='#exampleModalCenter'
                        >
                            Add users
                        </button>
                    ) : (
                        `[${result}]`
                    )}
                </div>
            </div>
            {result && (
                <div className='row pt-3'>
                    <div className='col-12 text-right'>
                        <button
                            type='button'
                            className='sale-button btn px-4 mb-3 shadow-sm button-primary'
                            data-toggle='modal'
                            data-target='#exampleModalCenter'
                        >
                            Add users
                        </button>
                    </div>
                </div>
            )}

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
                                    style={{ height: '20vh' }}
                                    id='message-text'
                                    placeholder={whitelistUsers.join(', ')}
                                    onChange={(e) =>
                                        setWhitelistedUsersAddr(e.target.value)
                                    }
                                ></textarea>
                                <label
                                    htmlFor='message-text'
                                    className='col-form-label error w-100'
                                >
                                    {errorMessage}
                                </label>
                            </div>
                        </div>
                        <div className='modal-footer border-top-0'>
                            <button
                                type='button'
                                className='sale-button btn w-30 px-4 shadow-sm button-primary'
                                disabled={whitelistUsersAddr ? false : true}
                                onClick={handleWhitelistUsers}
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
    IdoProjectDetails: (payload) => dispatch(IdoProjectDetails(payload)),
});
const mapStateToProps = (state) => ({
    whitelistUsersLoader: state.whitelistUsersLoader,
    whitelistedUsers: state.whitelistedUsers,
});
export default connect(mapStateToProps, mapDispatchToProps)(OwnerInfo);
