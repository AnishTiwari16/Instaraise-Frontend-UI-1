// eslint-disable-next-line
import React from 'react';

import { connect } from 'react-redux';
import { userPortfolio } from '../../redux/actions/selfHostedIDO/action.self';
import { connectWallet } from '../../redux/actions/wallet/action.wallet';
import { FetchSaleData, claimNow } from '../../redux/actions/ido/action.ido';
import NOT_FOUND_IMG from '../../assets/images/no-image.png';
import MainModal from '../Modals';
import { Link } from 'react-router-dom';

const PortfolioComponent = ({
    userPortfolio,
    userPortfolioData,
    wallet,
    connectWallet,
    claimTokens,
    fetchSaleData,
}) => {
    const [modalType, setModalType] = React.useState(null);
    const [operationId, setOperationId] = React.useState(null);
    const ClaimNow = async (tokenPoolAddress, projectName) => {
        if (!wallet) {
            alert('Please connect wallet');
            return;
        }
        setModalType('transfer');
        const API_RESPONSE = await claimTokens({
            contractAddress: tokenPoolAddress,
            projectName: projectName,
        });
        if (API_RESPONSE.payload.success) {
            fetchSaleData();
            setOperationId(API_RESPONSE.payload.operationHash);
            setModalType('success');
        } else {
            setModalType('error');
        }
    };
    const handleOperationId = (value) => {
        setOperationId(value);
    };
    const handleModalType = (value) => {
        setModalType(value);
    };
    React.useEffect(() => {
        userPortfolio();
    }, []);

    return (
        <div className='pb-5'>
            <MainModal
                setModalType={handleModalType}
                modalType={modalType}
                operationId={operationId}
                handleOperationId={handleOperationId}
                wallet={wallet}
                fetchSaleData={fetchSaleData}
            />
            <div className='card_i shadow-sm'>
                <div className='p-4 d-flex text-dark-to-light justify-content-between align-item-center '>
                    <h6 className='d-flex mt-1 flex-column justify-content-start p-0 text-dark-to-light fw-600 '>
                        Your Launchpad Holdings
                    </h6>
                </div>
                <div className='table-responsive dex-card '>
                    <table className='table text-12 table-hover-tokens table-borderless px-3 m-0'>
                        <TableHeader />
                        {userPortfolioData.success &&
                            userPortfolioData.data.map((elem, index) => {
                                const ALIAS = elem.projectName
                                    ? elem.projectName
                                          .split(' ')
                                          .join('')
                                          .toLowerCase()
                                    : '';
                                const PROJECT_LINK =
                                    elem.projectName === 'Instaraise'
                                        ? '#'
                                        : `/launchpad/IDO/${ALIAS}`;
                                return (
                                    <tbody
                                        className='text-14 position-relative '
                                        key={index}
                                    >
                                        <tr>
                                            <td></td>
                                        </tr>
                                        <tr className='name-col fw-500  hover-class table-last-child'>
                                            <td
                                                colSpan={8}
                                                className='col-sm-2 fixed-col name-col'
                                                scope='row'
                                            >
                                                <div className='my-2 d-flex align-items-center justify-content-start div-block'>
                                                    <div className='d-flex justify-content-center align-items-center ms-2 p-2 image-background-color border-10'>
                                                        <img
                                                            src={elem.icon}
                                                            onError={(e) => {
                                                                e.target.src =
                                                                    NOT_FOUND_IMG;
                                                            }}
                                                            alt='token_logo'
                                                            width={30}
                                                            height={30}
                                                            style={{
                                                                zIndex: '1',
                                                                borderRadius:
                                                                    '100%',
                                                            }}
                                                        />
                                                    </div>
                                                    <Link
                                                        className='ms-2 text-dark-to-light'
                                                        to={PROJECT_LINK}
                                                    >
                                                        {elem.projectName}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    minWidth: '180px',
                                                    fontSize: '12px',
                                                }}
                                                colSpan={2}
                                            >
                                                <div className='my-2 text-dark-to-light'>
                                                    {elem.yourInvestments.map(
                                                        (item, index) => {
                                                            {
                                                                return (
                                                                    <tr
                                                                        key={
                                                                            index
                                                                        }
                                                                        className='text-12 d-flex text-center justify-content-center align-items-center'
                                                                    >
                                                                        <td>
                                                                            {new Date(
                                                                                item.time
                                                                            ).toUTCString()}
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                        }
                                                    )}
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    minWidth: '180px',
                                                    fontSize: '12px',
                                                }}
                                                colSpan={2}
                                            >
                                                <div className='my-2 text-dark-to-light'>
                                                    {elem.yourInvestments.map(
                                                        (item, index) => {
                                                            {
                                                                return (
                                                                    <tr
                                                                        key={
                                                                            index
                                                                        }
                                                                        className='text-12 d-flex text-center justify-content-center align-items-center'
                                                                    >
                                                                        <td>
                                                                            {
                                                                                item.xtzInvested
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                        }
                                                    )}
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    minWidth: '180px',
                                                    fontSize: '12px',
                                                }}
                                                colSpan={2}
                                            >
                                                <div className='my-2 text-dark-to-light'>
                                                    {elem.yourInvestments.map(
                                                        (item, index) => {
                                                            {
                                                                return (
                                                                    <tr
                                                                        key={
                                                                            index
                                                                        }
                                                                        className='text-12 d-flex text-center justify-content-center align-items-center'
                                                                    >
                                                                        <td>
                                                                            {
                                                                                item.tokensReceived
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                        }
                                                    )}
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    minWidth: '180px',
                                                    fontSize: '12px',
                                                }}
                                                colSpan={2}
                                            >
                                                <div
                                                    data-bs-toggle='tooltip'
                                                    data-bs-placement='top'
                                                    title={`Current APR`}
                                                    className='font-weight-bold cursor-pointer my-2 d-flex justify-content-center align-items-center div-block text-dark-to-light'
                                                >
                                                    {elem.yourAllocation}
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    minWidth: '120px',
                                                }}
                                                colSpan={2}
                                            >
                                                <div className='my-2 div-block d-flex justify-content-center align-items-center'>
                                                    <button
                                                        className='px-3 shadow-sm text-12 m-auto btn rounded btn-sm trade-button'
                                                        onClick={() =>
                                                            ClaimNow(
                                                                elem.tokenPoolAddress,
                                                                elem.projectName
                                                            )
                                                        }
                                                    >
                                                        Claim now
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                    </table>
                </div>
                {!wallet && (
                    <div className='project-detail card-body align-items-center'>
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
                            className='text-center border-10 button-primary btn-faucet p-2 margin-auto my-2'
                        >
                            + Connect wallet
                        </button>
                    </div>
                )}
                <div className='project-detail card-body d-flex align-items-center'>
                    {userPortfolioData.success &&
                        wallet &&
                        !userPortfolioData.data.length > 0 && (
                            <h5 className='card-title text-16 m-auto'>
                                No Investments on this address
                            </h5>
                        )}
                    {!userPortfolioData.success && (
                        <div className='card-title m-auto'>
                            <div className='spinner-grow' role='status'>
                                <span className='sr-only'>Fetching...</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    userPortfolio: (payload) => dispatch(userPortfolio(payload)),
    connectWallet: (payload) => dispatch(connectWallet(payload)),
    claimTokens: (payload) => dispatch(claimNow(payload)),
    fetchSaleData: (payload) => dispatch(FetchSaleData(payload)),
});
const mapStateToProps = (state) => ({
    userPortfolioData: state.userPortfolioData,
    wallet: state.wallet,
});
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioComponent);
const TableHeader = () => {
    return (
        <thead className='mx-3 font-12 fw-light'>
            <tr
                className='margin-header image-background-color border-10'
                style={{
                    color: '#b5b5c3',
                }}
            >
                <th
                    className='col-sm-2  image-background-color name-col-l'
                    colSpan={8}
                    style={{
                        minWidth: '80px',
                        position: 'sticky',
                        left: '0',
                        zIndex: '1',
                    }}
                >
                    <div className=' fw-500 text-center my-2 '>Name</div>
                </th>
                <th
                    style={{
                        minWidth: '100px',
                    }}
                    colSpan={2}
                >
                    <div className=' fw-500 text-center my-2 '>
                        Transaction time
                    </div>
                </th>
                <th
                    style={{
                        minWidth: '100px',
                    }}
                    colSpan={2}
                >
                    <div className=' fw-500 text-center my-2 '>
                        XTZ Invested
                    </div>
                </th>
                <th
                    style={{
                        minWidth: '180px',
                    }}
                    colSpan={2}
                >
                    <div className='my-2  text-center fw-500'>
                        Tokens received
                    </div>
                </th>
                <th
                    style={{
                        minWidth: '180px',
                    }}
                    colSpan={2}
                >
                    <div className='my-2  text-center fw-500'>
                        Your allocation
                    </div>
                </th>
                <th
                    className='col-sm-2 name-col-r'
                    colSpan={2}
                    style={{
                        minWidth: '100px',
                    }}
                >
                    <div className='px-3 my-2'></div>
                </th>
            </tr>
        </thead>
    );
};
