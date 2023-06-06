// eslint-disable-next-line
import React from 'react';
import Synaps from '@synaps-io/react-verify';
const KybVerification = ({ handleComplete }) => {
    const [currentPage, setCurrentPage] = React.useState('page1');

    const fetchCurrentPage = () => {
        const data = localStorage.getItem('currentPage');
        setCurrentPage(data);
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
                                    <label htmlFor='exampleInputEmail1'>
                                        Email
                                    </label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='exampleInputEmail1'
                                        aria-describedby='emailHelp'
                                        placeholder='you@example.com'
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
                                    />
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button
                                        type='submit'
                                        className='sale-button btn px-5 shadow-sm button-primary'
                                        role='button'
                                        data-slide='next'
                                        href='#carouselExampleIndicators'
                                        onClick={() =>
                                            localStorage.setItem(
                                                'currentPage',
                                                'page2'
                                            )
                                        }
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
                                sessionId={
                                    '1e002897-6107f5f2-fa3ad079-23dbd2a1'
                                }
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

export default KybVerification;
