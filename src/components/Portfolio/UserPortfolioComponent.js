// eslint-disable-next-line
import React from 'react';

import { connect } from 'react-redux';
import { connectWallet } from '../../redux/actions/wallet/action.wallet';
import { userPortfolio } from '../../redux/actions/selfHostedIDO/action.self';
import NOT_FOUND_IMG from '../../assets/images/no-image.png';
import { Link } from 'react-router-dom';
import { claimNow } from '../../redux/actions/ido/action.ido';
import hand_Img from '../../assets/Ido/stepper/hand_Img.png';
import hand_dark_Img from '../../assets/Ido/stepper/hand_dark_Img.png';
import MainModal from '../Modals';
import Pagination from '../../hooks/pagination';
import { ThemeContext } from '../../routes/root';
import Shimmer from '../../hooks/shimmer';
const UserPortfolioComponent = ({
    claimTokens,
    connectWallet,
    userPortfolio,
    userPortfolioData,
    wallet,
}) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = React.useState(1);
    const [modalType, setModalType] = React.useState(null);
    const [userInvestmentBreakdown, setUserInvestmentBreakdown] =
        React.useState([]);
    const [saleClaimDate, setSaleClaimDate] = React.useState();
    const { theme } = React.useContext(ThemeContext);
    const ClaimNow = async (tokenPoolAddress, projectName) => {
        setModalType('transfer');
        const API_RESPONSE = await claimTokens({
            contractAddress: tokenPoolAddress,
            projectName: projectName,
        });
        if (API_RESPONSE.payload.success) {
            userPortfolio();

            setModalType('success');
        } else {
            setModalType('error');
        }
    };

    const handleModalType = (value) => {
        setModalType(value);
    };
    React.useEffect(() => {
        userPortfolio();
    }, [wallet]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    let USER_INVESTMENTS = [];
    if (userPortfolioData.success) {
        USER_INVESTMENTS = userPortfolioData.data;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = USER_INVESTMENTS.slice(startIndex, endIndex);
    return (
        <div>
            <MainModal
                setModalType={handleModalType}
                modalType={modalType}
                saleClaimDate={saleClaimDate}
                yourInvestments={userInvestmentBreakdown}
            />
            <div className='row row-cols-1 text-dark-to-light mt-3  project-layout g-4  mx-0 mx-lg-3 mx-md-3 '>
                <div className='d-flex flex-column flex-lg-row'>
                    <div className='p-2 w-100 text-center'>
                        <div className='col w-100'>
                            <h5 className='fw-600 text-center form-header text-nowrap'>
                                Your Sale Holdings
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            {wallet && !userPortfolioData.success && (
                <div className='my-2 my-lg-5 my-md-5 my-sm-5  px-0 mb-lg-0 text-dark-to-light mb-md-0  row row-cols-1 row-cols-xxl-3 row-cols-lg-2  row-cols-md-1 row-cols-sm-1 mx-0 mx-lg-3 mx-md-3'>
                    {<Shimmer />}
                </div>
            )}

            <div
                className='my-2 my-lg-5 my-md-5 my-sm-5 
                    px-0 mb-lg-0 text-dark-to-light mb-md-0 
                    row row-cols-1 row-cols-xxl-3 row-cols-lg-2 
                    row-cols-md-1 row-cols-sm-1
                    mx-0 mx-lg-3 mx-md-3'
            >
                {currentPageItems.map((elem, index) => {
                    const ALIAS = elem.projectName
                        ? elem.projectName.split(' ').join('').toLowerCase()
                        : '';
                    const PROJECT_LINK =
                        elem.projectName === 'Instaraise'
                            ? '#'
                            : `/launchpad/IDO/${ALIAS}`;
                    const TOKEN_UNLOCK_TIME = elem.time.tokenUnlock;
                    const IS_CLAIMABLE =
                        new Date() >= new Date(TOKEN_UNLOCK_TIME)
                            ? true
                            : false;
                    return (
                        <span className='launchpad-card py-3' key={index}>
                            <div className='container'>
                                <div
                                    className='card'
                                    data-label={'Finished sale'}
                                >
                                    <div className='card__container pb-0'>
                                        <img
                                            src={elem.icon}
                                            onError={(e) => {
                                                e.target.src = NOT_FOUND_IMG;
                                            }}
                                            width={45}
                                            height={45}
                                            style={{
                                                marginTop: '-12px',
                                                marginBottom: '15px',
                                            }}
                                            className='d-inline-block align-top me-2 rounded-circle'
                                            alt='Project'
                                        />

                                        <div className='card__body font-insta-regular'>
                                            <Link
                                                className='card__header form-header text-dark-to-light text-20'
                                                to={PROJECT_LINK}
                                            >
                                                {elem.projectName}
                                            </Link>
                                            <div className='pt-2 font-weight-bold form-header body-details-container text-14'>
                                                <div className='navbar sale-def p-0'>
                                                    <div>Your allocation</div>
                                                    <div>
                                                        {elem.yourAllocation}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center px-3 pt-3'>
                                        <button
                                            onClick={() => {
                                                if (IS_CLAIMABLE) {
                                                    ClaimNow(
                                                        elem.tokenPoolAddress,
                                                        elem.projectName
                                                    );
                                                }
                                            }}
                                            className={`px-3 py-2 w-100 shadow-sm text-12 m-auto btn rounded btn-sm trade-button ${
                                                !IS_CLAIMABLE
                                                    ? 'disable-b'
                                                    : 'connect-wallet-button'
                                            }`}
                                        >
                                            Claim now
                                        </button>
                                    </div>

                                    <hr className='p-0 mt-2 mb-0' />

                                    <div
                                        className='p-3 gradient-text-v text-center text-14 cursor-pointer fw-600'
                                        onClick={() => {
                                            setUserInvestmentBreakdown(
                                                elem.yourInvestments
                                            );
                                            setSaleClaimDate(
                                                elem.time.tokenUnlock
                                            );
                                            setModalType('claim');
                                        }}
                                    >
                                        {'Details'}&nbsp;
                                    </div>
                                </div>
                            </div>
                        </span>
                    );
                })}
                {wallet ? (
                    userPortfolioData.success &&
                    !userPortfolioData.data.length > 0 && (
                        <div className='card-body project-detail shadow-sm border-10'>
                            <h4 className='card-title text-16 m-auto fw-600'>
                                No Investments on this address
                            </h4>
                            <p className='card-title text-16 mx-auto font-insta-regular pt-3'>
                                Start investing today
                            </p>
                            <div className='mx-auto w-10'>
                                <hr />
                            </div>
                            <div>
                                <img
                                    src={theme ? hand_Img : hand_dark_Img}
                                    width={100}
                                    height={100}
                                    alt='hand'
                                />
                            </div>
                        </div>
                    )
                ) : (
                    <div className='card-body project-detail shadow-sm border-10'>
                        <h5 className='card-title text-16 m-auto pt-3 pb-2'>
                            Connect your wallet
                        </h5>
                        <p className='card-title text-16 mx-auto font-insta-regular'>
                            Please connect you wallet to view your Investments
                        </p>
                        <div className=' mx-auto w-10'>
                            <hr />
                        </div>
                        <button
                            type='button'
                            onClick={(e) => {
                                e.preventDefault();
                                connectWallet({
                                    NETWORK: 'testnet',
                                });
                            }}
                            className='btn-faucet rounded px-3 py-2 my-2'
                        >
                            + Connect wallet
                        </button>
                    </div>
                )}
            </div>
            {USER_INVESTMENTS.length > itemsPerPage && (
                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={USER_INVESTMENTS.length}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};
const mapDispatchToProp = (dispatch) => ({
    userPortfolio: (payload) => dispatch(userPortfolio(payload)),
    claimTokens: (payload) => dispatch(claimNow(payload)),
    connectWallet: (payload) => dispatch(connectWallet(payload)),
});
const mapStateToProps = (state) => ({
    userPortfolioData: state.userPortfolioData,
    wallet: state.wallet,
});
export default connect(
    mapStateToProps,
    mapDispatchToProp
)(UserPortfolioComponent);
