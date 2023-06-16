// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { createSaleAction } from '../../../redux/actions/selfHostedIDO/action.self';
import { BiLoaderAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import MainModal from '../../Modals';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../../routes/root';
import { PROJECT_DETAILS_API_URL } from '../../../config/config';
import VerifyTokensConfig from '../../../config/Launchpad/verifyTokensConfig';
import { useMediaQuery, useTheme } from '@mui/material';

const VerfiyDetails = ({
    createSaleAction,
    handleBack,
    project,
    createSaleLoader,
    wallet,
}) => {
    const navigate = useNavigate();
    const { theme } = React.useContext(ThemeContext);
    const mobiletheme = useTheme();
    const isMobile = useMediaQuery(mobiletheme.breakpoints.down('sm'));
    const [modalType, setModalType] = React.useState(null);
    const [operationId, setOperationId] = React.useState('');
    const handleOnSubmit = async () => {
        try {
            const resp = await createSaleAction({
                admin: wallet,
                tokensToSell: project.amountToSell,
                decimals: project.decimals,
                isPublicSaleWhitelisted: project.isPublicSaleWhitelisted,
                lpLockupTime: project.lpLockupTime,
                maxTokensToLp: project.maxTokensToLp,
                percentageRevenueToLP: project.percentageRevenueToLP,
                presaleEndTime: project.presaleEndTime,
                privateSaleAllocation: project.privateSaleAllocation,
                privateSalePrice: project.privateSalePrice,
                presaleStartTime: project.presaleStartTime,
                publicEndTime: project.publicEndTime,
                publicMaxParticipation: project.publicMaxParticipation,
                publicSalePrice: project.publicSalePrice,
                publicStartTime: project.publicStartTime,
                stakingContract: project.stakingContract,
                timeBlock: project.timeBlock,
                tokenDexPrice: project.tokenDexPrice,
                tokenId: project.tokenId,
                tokenUnlockTime: project.tokenUnlockTime,
                tokenAddress: project.tokenAddress,
            });
            if (resp.payload.success) {
                setOperationId(resp.payload.hash);
                setModalType('success');
                await fetch(PROJECT_DETAILS_API_URL, {
                    method: 'POST',
                    body: JSON.stringify({
                        PROJECT_NAME: project.projectName,
                        description: project.description,
                        ICON: project.logoURL,
                        website: project.website,
                        telegram: project.telegram,
                        medium: project.medium,
                        twitter: project.twitter,
                        github: project.github,
                        tokenAddress: project.tokenAddress,
                    }),
                });
                setTimeout(() => {
                    navigate('/launchpad/all-launchpads');
                }, 7000);
                return;
            } else {
                if (resp.payload.error.name === 'UnknownBeaconError') {
                    setModalType('error');
                } else {
                    toast.error(resp.payload.error.message);
                }
            }
        } catch (error) {
            setModalType('error');
        }
    };
    return (
        <>
            <MainModal
                setModalType={setModalType}
                modalType={modalType}
                operationId={operationId}
                type='error'
            />
            <ToastContainer
                position='bottom-right'
                autoClose={6000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                theme={!theme ? 'dark' : 'light'}
                progressStyle={{
                    backgroundColor: '#5a1eab',
                }}
                pauseOnHover
            />
            <div className='card pool shadow-sm h-100 border-10 mt-5'>
                <div className='card-body p-4'>
                    <VerifyTokensConfig />

                    <div className='d-flex justify-content-between pt-4 pb-2'>
                        <button
                            className='sale-button btn px-5 shadow-sm button-primary'
                            onClick={handleBack}
                        >
                            Back
                        </button>

                        <button
                            className={`sale-button btn px-4 shadow-sm button-primary ${
                                !isMobile ? 'w-15' : ''
                            }`}
                            onClick={handleOnSubmit}
                        >
                            {createSaleLoader ? (
                                <div className='rotate-2'>
                                    <BiLoaderAlt size={20} />
                                </div>
                            ) : (
                                'Create sale'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
const mapDispatchToProps = (dispatch) => ({
    createSaleAction: (payload) => dispatch(createSaleAction(payload)),
});
const mapStateToProps = (state) => ({
    wallet: state.wallet,
    project: state.project,
    createSaleLoader: state.createSaleLoader,
});
export default connect(mapStateToProps, mapDispatchToProps)(VerfiyDetails);