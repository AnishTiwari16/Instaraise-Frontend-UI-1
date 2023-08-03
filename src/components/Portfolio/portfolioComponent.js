// eslint-disable-next-line
import React from 'react';

import { connect } from 'react-redux';
import { userPortfolio } from '../../redux/actions/selfHostedIDO/action.self';
import { FetchSaleData, claimNow } from '../../redux/actions/ido/action.ido';
import NOT_FOUND_IMG from '../../assets/images/no-image.png';
import MainModal from '../Modals';
import { Link } from 'react-router-dom';

const PortfolioComponent = ({
    userPortfolio,
    userPortfolioData,
    wallet,
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
    }, [wallet]);
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
                <div className='p-4 d-flex text-dark-to-light justify-content-between align-item-center'>
                    <h6 className='d-flex mt-1 flex-column justify-content-start p-0 text-dark-to-light fw-600'>
                        Your Launchpad Holdings
                    </h6>
                </div>

                <div className='table-responsive dex-card '>
                    <table className='table text-12 table-hover-tokens table-borderless px-3 m-0'>
                        <TableHeader />
                        {userPortfolioData.success &&
                            userPortfolioData.data.map((elem, index) => {
                                const TOKEN_UNLOCK_TIME = elem.time.tokenUnlock;
                                const IS_CLAIMABLE =
                                    new Date() >= new Date(TOKEN_UNLOCK_TIME)
                                        ? true
                                        : false;
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
                                                className='position-relative col-sm-2 fixed-col name-col'
                                                scope='row'
                                            >
                                                <div className='d-flex align-items-center justify-content-start div-block align-sale-name'>
                                                    <div className='ms-2 p-2 image-background-color border-10'>
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
                                                        className='overflow-auto ms-2 text-dark-to-light'
                                                        to={PROJECT_LINK}
                                                    >
                                                        {elem.projectName}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td
                                                className='position-relative'
                                                style={{
                                                    minWidth: '180px',
                                                    fontSize: '12px',
                                                }}
                                                colSpan={2}
                                            >
                                                <div className='align-sale-name my-2 text-dark-to-light'>
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
                                                className='position-relative'
                                                style={{
                                                    minWidth: '180px',
                                                    fontSize: '12px',
                                                }}
                                                colSpan={2}
                                            >
                                                <div className='text-dark-to-light align-div-styles'>
                                                    {elem.yourInvestments.map(
                                                        (item, index) => {
                                                            {
                                                                return (
                                                                    <tr
                                                                        key={
                                                                            index
                                                                        }
                                                                        className='text-12'
                                                                    >
                                                                        <td className='py-3'>
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
                                                className='position-relative'
                                                style={{
                                                    minWidth: '180px',
                                                    fontSize: '12px',
                                                }}
                                                colSpan={2}
                                            >
                                                <div className='text-dark-to-light align-div-styles'>
                                                    {elem.yourInvestments.map(
                                                        (item, index) => {
                                                            {
                                                                return (
                                                                    <tr
                                                                        key={
                                                                            index
                                                                        }
                                                                        className='text-12'
                                                                    >
                                                                        <td className='py-3'>
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
                                                className='position-relative'
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
                                                    className='align-div-styles font-weight-bold cursor-pointer d-flex justify-content-center align-items-center div-block text-dark-to-light'
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
                                                <div
                                                    className='alert alert-warning p-1 mb-0 text-mini text-center'
                                                    role='alert'
                                                >
                                                    Investors can claim their
                                                    tokens after&nbsp;
                                                    {
                                                        TOKEN_UNLOCK_TIME.split(
                                                            ' '
                                                        )[0]
                                                    }{' '}
                                                    {
                                                        TOKEN_UNLOCK_TIME.split(
                                                            ' '
                                                        )[1]
                                                    }{' '}
                                                    {
                                                        TOKEN_UNLOCK_TIME.split(
                                                            ' '
                                                        )[2]
                                                    }{' '}
                                                    {
                                                        TOKEN_UNLOCK_TIME.split(
                                                            ' '
                                                        )[3]
                                                    }{' '}
                                                    {
                                                        TOKEN_UNLOCK_TIME.split(
                                                            ' '
                                                        )[4]
                                                    }{' '}
                                                    {
                                                        TOKEN_UNLOCK_TIME.split(
                                                            ' '
                                                        )[5]
                                                    }
                                                    &nbsp;as per vesting
                                                    schedule. Even if investors
                                                    forget to claim, our smart
                                                    contract will auto credit
                                                    tokens to their addresses.
                                                </div>
                                                <div className='my-2 div-block d-flex justify-content-center align-items-center'>
                                                    <button
                                                        onClick={() => {
                                                            if (IS_CLAIMABLE) {
                                                                ClaimNow(
                                                                    elem.tokenPoolAddress,
                                                                    elem.projectName
                                                                );
                                                            }
                                                        }}
                                                        className={`px-3 shadow-sm text-12 m-auto btn rounded btn-sm trade-button ${
                                                            !IS_CLAIMABLE
                                                                ? 'disable-b'
                                                                : 'connect-wallet-button'
                                                        }`}
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
                    {!userPortfolioData.success && (
                        <div className='project-detail card-body d-flex align-items-center'>
                            <h5 className='card-title text-16 m-auto py-5 fw-600'>
                                No Investments on this address
                            </h5>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    userPortfolio: (payload) => dispatch(userPortfolio(payload)),
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
