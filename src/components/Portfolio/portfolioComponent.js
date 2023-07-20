// eslint-disable-next-line
import React from 'react';

import { connect } from 'react-redux';
import { RiShieldFlashFill, RiShieldFlashLine } from 'react-icons/ri';
import { userPortfolio } from '../../redux/actions/selfHostedIDO/action.self';

const PortfolioComponent = ({ userPortfolio, userPortfolioData }) => {
    React.useEffect(() => {
        userPortfolio();
    }, []);
    return (
        <div className='pb-5'>
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
                                return (
                                    <tbody
                                        className='text-14 position-relative '
                                        key={index}
                                    >
                                        <tr>
                                            <td></td>
                                        </tr>
                                        <tr className='name-col fw-500  hover-class'>
                                            <td
                                                colSpan={8}
                                                className='col-sm-2 fixed-col name-col'
                                                scope='row'
                                            >
                                                <div className='my-2 d-flex align-items-center justify-content-start div-block '>
                                                    <div className='me-3 text-dark-to-light'>
                                                        <RiShieldFlashFill
                                                            size={25}
                                                            className='cursor-pointer'
                                                        />
                                                    </div>
                                                    <div className='d-flex justify-content-center align-items-center ms-2 p-2 image-background-color border-10'>
                                                        <img
                                                            src={elem.icon}
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
                                                    <div className='ms-2 text-dark-to-light'>
                                                        {elem.projectName}
                                                        <div className='text-mini'>
                                                            asdf
                                                        </div>
                                                    </div>
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
                                                    className='cursor-pointer my-2 d-flex justify-content-center align-items-center div-block text-dark-to-light'
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
                                                    <button className='px-3 shadow-sm text-12 m-auto btn rounded btn-sm trade-button'>
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
                {userPortfolioData.success &&
                    !userPortfolioData.data.length > 0 && (
                        <div className='project-detail card-body  d-flex align-items-center '>
                            <h5 className='card-title text-16 m-auto'>
                                No Investments on this address
                            </h5>
                        </div>
                    )}
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    userPortfolio: (payload) => dispatch(userPortfolio(payload)),
});
const mapStateToProps = (state) => ({
    userPortfolioData: state.userPortfolioData,
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
                    <div className='fw-500 d-flex align-items-end justify-content-start my-2'>
                        <div className='me-4 text-dark-to-light'>
                            <RiShieldFlashLine
                                size={25}
                                className='cursor-pointer'
                            />
                        </div>
                        <div>&nbsp;Name</div>
                    </div>
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
