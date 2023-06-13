// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { createSaleAction } from '../../../redux/actions/selfHostedIDO/action.self';
import { BiLoaderAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import MainModal from '../../Modals';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeContext } from '../../../routes/root';
import { PROJECT_DETAILS_API_URL } from '../../../config/config';
const VerfiyDetails = ({
    createSaleAction,
    handleBack,
    project,
    createSaleLoader,
}) => {
    const navigate = useNavigate();
    const { theme } = React.useContext(ThemeContext);
    const [modalType, setModalType] = React.useState(null);
    const [operationId, setOperationId] = React.useState('');
    const handleOnSubmit = async () => {
        try {
            const resp = await createSaleAction({
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
                        name: project.projectName,
                        desc: project.description,
                        logo: project.logoURL,
                        website: project.website,
                        telegram: project.telegram,
                        medium: project.medium,
                        twitter: project.twitter,
                        github: project.github,
                    }),
                });
                setTimeout(() => {
                    navigate('/launchpad/IDO');
                }, 10000);
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
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Token address</div>
                        <div>{project.tokenAddress}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Decimals</div>
                        <div>{project.decimals}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Token Id</div>
                        <div>{project.tokenId}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Private Start Time</div>
                        <div>{project.presaleStartTime.toString()}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>private End Time</div>
                        <div>{project.presaleEndTime.toString()}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Private Sale Price</div>
                        <div>{project.privateSalePrice}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>public Start Time</div>
                        <div>{project.publicStartTime.toString()}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>public End Time</div>
                        <div>{project.publicEndTime.toString()}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Public max participation</div>
                        <div>{project.publicMaxParticipation}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Public Sale Price</div>
                        <div>{project.publicSalePrice}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Amount to sell</div>
                        <div>{project.amountToSell}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Max Tokens To LP</div>
                        <div>{project.maxTokensToLp}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>token Unlock Time</div>
                        <div>{project.tokenUnlockTime.toString()}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Percentage Revenue To LP</div>
                        <div>{project.percentageRevenueToLP}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>lp Lockup Time</div>
                        <div>{project.lpLockupTime.toString()}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>token DEX Price</div>
                        <div>{project.tokenDexPrice}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>staking Contract</div>
                        <div>{project.tokenAddress}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>timeBlock</div>
                        <div>{project.timeBlock}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Public Sale Whitelisted</div>
                        <div>
                            {project.isPublicSaleWhitelisted ? 'true' : 'false'}
                        </div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Project name</div>
                        <div>{project.projectName}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Description</div>
                        <div>{project.description}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Logo URL</div>
                        <div>{project.logoURL}</div>
                    </div>
                    <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                        <div>Website</div>
                        <div>{project.website}</div>
                    </div>
                    {project.telegram && (
                        <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                            <div>Telegram</div>
                            <div>{project.telegram}</div>
                        </div>
                    )}
                    {project.twitter && (
                        <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                            <div>Twitter</div>
                            <div>{project.twitter}</div>
                        </div>
                    )}
                    {project.github && (
                        <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                            <div>Github</div>
                            <div>{project.github}</div>
                        </div>
                    )}
                    {project.medium && (
                        <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                            <div>Medium</div>
                            <div>{project.medium}</div>
                        </div>
                    )}

                    <div className='d-flex justify-content-between pt-4 pb-2'>
                        <button
                            className='sale-button btn px-5 shadow-sm button-primary'
                            onClick={handleBack}
                        >
                            Back
                        </button>

                        <button
                            className='sale-button btn w-15 px-4 shadow-sm button-primary'
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
    project: state.project,
    createSaleLoader: state.createSaleLoader,
});
export default connect(mapStateToProps, mapDispatchToProps)(VerfiyDetails);
