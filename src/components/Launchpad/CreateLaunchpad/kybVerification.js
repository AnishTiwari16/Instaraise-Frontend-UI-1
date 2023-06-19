// eslint-disable-next-line
import React from 'react';
import Synaps from '@synaps-io/react-verify';
import { connect } from 'react-redux';
import {
    createNewProject,
    userVerification,
} from '../../../redux/actions/selfHostedIDO/action.self';
const KybVerification = ({
    handleComplete,
    userVerification,
    userVerifyData,
    wallet,
    project,
    createNewProject,
}) => {
    const { email } = project;
    const [emailValidationFlag, setEmailValidationFlag] = React.useState(false);
    const handleNext = async () => {
        await userVerification({ email, wallet });
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    React.useEffect(() => {
        if (emailRegex.test(email)) {
            setEmailValidationFlag(true);
        } else {
            setEmailValidationFlag(false);
        }
    }, [email]);
    return (
        <div className='card pool shadow-sm border-10 mt-10 w-50 mx-auto pt-3'>
            <div className='card-body'>
                <div
                    id='carouselExampleIndicators'
                    className='carousel slide'
                    data-ride='carousel'
                    data-interval='false'
                >
                    <ol className='carousel-indicators'>
                        <li
                            data-target='#carouselExampleIndicators'
                            // data-slide-to='0'
                            className='active'
                        ></li>
                        <li
                            data-target='#carouselExampleIndicators'
                            // data-slide-to='1'
                        ></li>
                    </ol>
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <form className='needs-validation' noValidate>
                                <div className='form-group'>
                                    <label htmlFor='validationDefaultUsername'>
                                        Email
                                    </label>
                                    <input
                                        type='email'
                                        className='form-control bg-white text-dark-to-light'
                                        id='validationDefaultUsername'
                                        aria-describedby='inputGroupPrepend2'
                                        placeholder='you@example.com'
                                        onChange={(e) =>
                                            createNewProject({
                                                ...project,
                                                email: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                    {!emailValidationFlag && email && (
                                        <small
                                            id='emailHelp'
                                            className='form-text text-muted '
                                        >
                                            <span className='invalid-color'>
                                                Invalid email
                                            </span>
                                        </small>
                                    )}
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputPassword1'>
                                        XTZ wallet
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control bg-white text-dark-to-light'
                                        id='exampleInputPassword1'
                                        placeholder='Connect your wallet'
                                        defaultValue={wallet}
                                        disabled='disabled'
                                    />
                                </div>

                                <div className='d-flex justify-content-end pb-5 pt-2'>
                                    <button
                                        type='submit'
                                        className='sale-button btn px-5 shadow-sm button-primary'
                                        role='button'
                                        data-slide='next'
                                        href='#carouselExampleIndicators'
                                        onClick={() => {
                                            createNewProject({
                                                ...project,
                                                userAdminAddress: wallet,
                                            });
                                            handleNext();
                                        }}
                                        disabled={
                                            !wallet ||
                                            !email ||
                                            !emailValidationFlag
                                        }
                                    >
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='carousel-item '>
                            <Synaps
                                sessionId={userVerifyData.data}
                                service={'corporate'}
                                lang={'en'}
                                onReady={() => console.log('component ready')}
                                onFinish={() =>
                                    console.log('user finish process')
                                }
                                color={{
                                    primary: '6042ec',
                                    secondary: 'ffffff',
                                }}
                            />
                            <div className='d-flex justify-content-end pb-5 pt-2'>
                                <button
                                    className='sale-button btn px-5 shadow-sm button-primary'
                                    onClick={handleComplete}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    userVerification: (payload) => dispatch(userVerification(payload)),
    createNewProject: (payload) => dispatch(createNewProject(payload)),
});
const mapStateToProps = (state) => ({
    userVerifyData: state.userVerifyData,
    wallet: state.wallet,
    project: state.project,
});
export default connect(mapStateToProps, mapDispatchToProps)(KybVerification);
