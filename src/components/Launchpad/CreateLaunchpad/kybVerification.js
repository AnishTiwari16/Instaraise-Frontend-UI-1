// eslint-disable-next-line
import React from 'react';
import Synaps from '@synaps-io/react-verify';
import { connect } from 'react-redux';
import { userVerification } from '../../../redux/actions/selfHostedIDO/action.self';
const KybVerification = ({
    handleComplete,
    userVerification,
    userVerifyData,
}) => {
    const [currentPage, setCurrentPage] = React.useState('page1');
    const [email, setEmail] = React.useState('');
    const [xtzAddress, setXtzAddress] = React.useState('');

    const fetchCurrentPage = () => {
        const data = localStorage.getItem('currentPage');

        setCurrentPage(data);
    };
    const handleNext = async () => {
        const resp = await userVerification({ email, xtzAddress });
        if (resp.payload.success) {
            localStorage.setItem('currentPage', 'page2');
        }
    };
    React.useEffect(() => {
        fetchCurrentPage();
    }, [fetchCurrentPage]);

    return (
        <div className='card pool shadow-sm h-100 border-10 mt-5'>
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
                            data-slide-to='0'
                            className='active'
                        ></li>
                        <li
                            data-target='#carouselExampleIndicators'
                            data-slide-to='1'
                        ></li>
                    </ol>
                    <div className='carousel-inner'>
                        <div
                            className={`carousel-item ${
                                currentPage === 'page1'
                                    ? 'active'
                                    : currentPage === 'page2'
                                    ? null
                                    : 'active'
                            }`}
                        >
                            <form>
                                <div className='form-group'>
                                    <label htmlFor='validationDefaultUsername'>
                                        Email
                                    </label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='validationDefaultUsername'
                                        aria-describedby='inputGroupPrepend2'
                                        placeholder='you@example.com'
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />
                                    {/* <small id='emailHelp' className='form-text text-muted'>
                            Well never share your email with anyone else.
                        </small> */}
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputPassword1'>
                                        XTZ wallet
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='exampleInputPassword1'
                                        placeholder='XTZ wallet'
                                        onChange={(e) =>
                                            setXtzAddress(e.target.value)
                                        }
                                    />
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button
                                        type='submit'
                                        className='sale-button btn px-5 shadow-sm button-primary'
                                        role='button'
                                        data-slide='next'
                                        href='#carouselExampleIndicators'
                                        onClick={handleNext}
                                    >
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div
                            className={`carousel-item ${
                                currentPage === 'page2' && 'active'
                            }`}
                        >
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
                            <div className='d-flex justify-content-end py-2'>
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
});
const mapStateToProps = (state) => ({
    userVerifyData: state.userVerifyData,
});
export default connect(mapStateToProps, mapDispatchToProps)(KybVerification);
