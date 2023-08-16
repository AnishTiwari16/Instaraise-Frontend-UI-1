// eslint-disable-next-line
import { Box, Fade, Modal, useMediaQuery } from '@mui/material';
import React from 'react';
import { MdClose } from 'react-icons/md';
import Backdrop from '@mui/material/Backdrop';
import { ThemeContext } from '../../../routes/root';
const ClaimModal = (props) => {
    const { saleClaimDate, yourInvestments, setModalType } = props;
    const matches = useMediaQuery('(min-width:600px)');
    const heightMathces = useMediaQuery('(min-width: 1200px)');
    const { theme } = React.useContext(ThemeContext);
    const style = {
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -20%)',
        height: !heightMathces ? '70vh' : null,
        overflowX: 'hidden',
        overflowY: 'scroll',
        width: !matches ? '90vw' : '35vw',
        backgroundColor: theme ? 'rgb(255, 255, 255)' : 'rgb(22, 3, 53)',
        color: theme ? '#4e5d78' : '#ffffff',
        borderRadius: '10px',
        boxShadow: 24,
        outline: 'none',
        px: 2,
    };
    return (
        <div>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={true}
                onClose={() => setModalType(null)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={true}>
                    <Box sx={style}>
                        <div className='d-flex justify-content-end'>
                            <div
                                className='d-flex justify-content-center align-items-center'
                                onClick={() => setModalType()}
                                style={{
                                    cursor: 'pointer',
                                    border: '2px solid #ffff',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    marginTop: '10px',
                                    marginRight: '-5px',
                                    backgroundColor: theme
                                        ? '#4e5d78'
                                        : '#080421',
                                }}
                            >
                                <MdClose color='white' size={20} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='text-dark-to-light'>
                                Investment breakdown
                            </h6>
                        </div>
                        <div
                            className='mt-2 alert alert-warning p-2 text-mini'
                            role='alert'
                        >
                            Investors can claim their tokens after&nbsp;
                            {saleClaimDate.split(' ')[0]}{' '}
                            {saleClaimDate.split(' ')[1]}{' '}
                            {saleClaimDate.split(' ')[2]}{' '}
                            {saleClaimDate.split(' ')[3]}{' '}
                            {saleClaimDate.split(' ')[4]}{' '}
                            {saleClaimDate.split(' ')[5]}
                            &nbsp;as per vesting schedule. Even if investors
                            forget to claim, our smart contract will auto credit
                            tokens to their addresses.
                        </div>
                        <div className='my-3 d-flex justify-content-between align-items-center rounded shadow-none'>
                            <table className='table table-bordered'>
                                <thead className='text-center'>
                                    <tr>
                                        <td
                                            className='text-14 '
                                            style={{
                                                color: theme
                                                    ? '#4E5D78'
                                                    : '#FFFFFF',
                                            }}
                                        >
                                            Transaction time
                                        </td>
                                        <td
                                            className='text-14'
                                            style={{
                                                color: theme
                                                    ? '#4E5D78'
                                                    : '#FFFFFF',
                                            }}
                                        >
                                            XTZ Invested
                                        </td>
                                        <td
                                            className='text-14'
                                            style={{
                                                color: theme
                                                    ? '#4E5D78'
                                                    : '#FFFFFF',
                                            }}
                                        >
                                            Tokens received
                                        </td>
                                    </tr>
                                </thead>
                                <tbody
                                    className='text-center'
                                    style={{
                                        color: theme ? '#4E5D78' : '#FFFFFF',
                                    }}
                                >
                                    {yourInvestments.map((item, index) => {
                                        return (
                                            <tr key={index} className='text-14'>
                                                <td>
                                                    {new Date(
                                                        item.time
                                                    ).toUTCString()}
                                                </td>
                                                <td>{item.xtzInvested}</td>
                                                <td>{item.tokensReceived}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default ClaimModal;
