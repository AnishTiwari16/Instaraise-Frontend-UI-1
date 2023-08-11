// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';

import { IdoProjectDetails } from '../../../redux/actions/selfHostedIDO/action.self';
import Pagination from '../../../hooks/pagination';
import { connectWallet } from '../../../redux/actions/wallet/action.wallet';
import { FaWallet } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import SaleCards from './SaleCards';
import Shimmer from '../../../hooks/shimmer';

const MyIdoSale = (props) => {
    const { selfIdoProjects, wallet } = props;
    const [currentPage, setCurrentPage] = React.useState(1);
    const [shimmerLoading, setShimmerLoading] = React.useState(true);
    const itemsPerPage = 6;
    const fetchData = async () => {
        await props.IdoProjectDetails();
    };
    React.useEffect(() => {
        fetchData();
        const shimmerTimeout = setTimeout(() => {
            setShimmerLoading(false);
        }, 3000);
        // Clear the timeout if the component unmounts before 3 seconds
        return () => {
            clearTimeout(shimmerTimeout);
        };
    }, []);
    let MY_PROJECT = [];
    if (selfIdoProjects.success) {
        MY_PROJECT = selfIdoProjects.data
            .filter((elem) => {
                return elem.admin === wallet;
            })
            .sort(function (a, b) {
                const aDate = new Date(a.time.public.start);
                const bDate = new Date(b.time.public.start);
                return bDate - aDate;
            });
    }
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = MY_PROJECT.slice(startIndex, endIndex);
    return (
        <div>
            <div className='row row-cols-1 text-dark-to-light mt-3  project-layout g-4  mx-0 mx-lg-3 mx-md-3 '>
                <div className='d-flex flex-column flex-lg-row'>
                    <div className='p-2 w-100 text-center'>
                        <div className='col w-100'>
                            <h4 className='fw-600 text-center form-header text-nowrap'>
                                Your Sales
                            </h4>
                            <p className='text-center font-insta-regular'>
                                Collections of all your launchpad sales
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {!wallet ? (
                <div className='mt-3 card-body project-detail shadow-sm border-10'>
                    <div className='my-5 form-header text-dark-to-light'>
                        <div className='text-center mb-2'>
                            <FaWallet size={65} />
                        </div>
                        <h6 className='text-center'>
                            Please connect your wallet to proceed&nbsp;
                            <Link
                                to='#'
                                className='router-l router-l-u'
                                onClick={() =>
                                    props.connectWallet({
                                        NETWORK: 'mainnet',
                                    })
                                }
                            >
                                Connect now{' '}
                            </Link>
                        </h6>
                    </div>
                </div>
            ) : MY_PROJECT.length === 0 ? (
                shimmerLoading ? (
                    <div className='my-2 my-lg-5 my-md-5 my-sm-5  px-0 mb-lg-0 text-dark-to-light mb-md-0  row row-cols-1 row-cols-xxl-3 row-cols-lg-2  row-cols-md-1 row-cols-sm-1 mx-0 mx-lg-3 mx-md-3'>
                        <Shimmer />
                    </div>
                ) : (
                    <div className='mt-3 card-body project-detail shadow-sm border-10'>
                        <div className='my-5 form-header text-dark-to-light'>
                            <div className='text-center mb-2'>
                                <IoIosCreate size={65} />
                            </div>
                            <h6 className='text-center'>
                                No sale created yet! Good time to&nbsp;
                                <Link
                                    to='/launchpad/create-sale'
                                    className='router-l router-l-u'
                                >
                                    Create one{' '}
                                </Link>
                            </h6>
                        </div>
                    </div>
                )
            ) : (
                <>
                    <div
                        className='my-2 my-lg-5 my-md-5 my-sm-5 
                    px-0 mb-lg-0 text-dark-to-light mb-md-0 
                    row row-cols-1 row-cols-xxl-3 row-cols-lg-2 
                    row-cols-md-1 row-cols-sm-1
                    mx-0 mx-lg-3 mx-md-3'
                    >
                        {currentPageItems.map((elem, index) => {
                            return <SaleCards {...elem} key={index} />;
                        })}
                    </div>
                    {MY_PROJECT.length > itemsPerPage && (
                        <Pagination
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            totalItems={MY_PROJECT.length}
                            onPageChange={handlePageChange}
                        />
                    )}
                </>
            )}
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    IdoProjectDetails: (payload) => dispatch(IdoProjectDetails(payload)),
    connectWallet: (payload) => dispatch(connectWallet(payload)),
});
const mapStateToProps = (state) => ({
    wallet: state.wallet,
    selfIdoProjects: state.selfIdoProjects,
});
export default connect(mapStateToProps, mapDispatchToProps)(MyIdoSale);
