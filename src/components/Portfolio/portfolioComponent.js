import React from 'react';
import { AiFillMinusCircle } from 'react-icons/ai';
import { MdOutlineAddCircle } from 'react-icons/md';
import { RiShieldFlashFill, RiShieldFlashLine } from 'react-icons/ri';

const PortfolioComponent = () => {
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
                        <tbody className='text-14 position-relative '>
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
                                                src={''}
                                                alt='token_logo'
                                                width={30}
                                                height={30}
                                                style={{
                                                    zIndex: '1',
                                                    borderRadius: '100%',
                                                }}
                                            />
                                        </div>
                                        <div className='ms-2 text-dark-to-light'>
                                            asdf
                                            <div className='text-mini '>
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
                                    <div className='my-2 text-center justify-content-center d-flex align-items-center div-block text-dark-to-light'>
                                        asdf
                                        <br />
                                        asdf
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
                                        asdf
                                    </div>
                                </td>
                                <td
                                    style={{
                                        minWidth: '120px',
                                    }}
                                    colSpan={2}
                                >
                                    <div className='my-2 d-flex align-items-center justify-content-center div-block'>
                                        <div>
                                            <div className='my-2 d-flex align-items-center justify-content-center'>
                                                <button className='shadow-sm text-12 px-1 m-auto py-1 btn rounded btn-sm trade-button'>
                                                    <MdOutlineAddCircle
                                                        size={20}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='ms-2'>
                                            <div className='my-2 d-flex align-items-center justify-content-center'>
                                                <button className='shadow-sm ms-2 text-12 px-1 m-auto py-1 btn rounded btn-sm trade-button'>
                                                    <AiFillMinusCircle
                                                        size={20}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PortfolioComponent;
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
                        Your Allocations
                    </div>
                </th>
                <th
                    style={{
                        minWidth: '180px',
                    }}
                    colSpan={2}
                >
                    <div className='my-2  text-center fw-500'>idk</div>
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
