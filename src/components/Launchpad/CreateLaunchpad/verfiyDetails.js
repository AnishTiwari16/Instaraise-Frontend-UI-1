// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { createSaleAction } from '../../../redux/actions/selfHostedIDO/action.self';
const VerfiyDetails = ({ createSaleAction, handleBack, project }) => {
    const handleOnSubmit = async () => {
        try {
            const op = await createSaleAction({
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
                timeBlock: project.timeBlock,
                tokenDexPrice: project.tokenDexPrice,
                tokenId: project.tokenId,
                tokenUnlockTime: project.tokenUnlockTime,
                tokenAddress: project.tokenAddress,
            });
            console.log(op);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(project.presaleStartTime);
    return (
        <div className='card pool shadow-sm h-100 border-10 mt-5'>
            <div className='card-body p-4'>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Project name</div>
                    <div>{project.projectName}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Token name</div>
                    <div>{project.tokenName}</div>
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
                    <div>Telegram</div>
                    <div>{project.telegram}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Twitter</div>
                    <div>{project.twitter}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Website</div>
                    <div>{project.website}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Github</div>
                    <div>{project.github}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Medium</div>
                    <div>{project.medium}</div>
                </div>
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
                    <div>{project.tokenID}</div>
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
                <div className='d-flex justify-content-between py-3'>
                    <div>Is Public Sale Whitelisted</div>
                    <div>{project.isPublicSaleWhitelisted}</div>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <button
                        // disabled={!tokenAddress}
                        className='sale-button btn px-5 shadow-sm button-primary'
                        onClick={handleBack}
                    >
                        Back
                    </button>

                    <button
                        // disabled={!tokenAddress}
                        className='sale-button btn px-4 shadow-sm button-primary'
                        onClick={handleOnSubmit}
                    >
                        Create sale
                    </button>
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    createSaleAction: (payload) => dispatch(createSaleAction(payload)),
});
const mapStateToProps = (state) => ({
    project: state.project,
});
export default connect(mapStateToProps, mapDispatchToProps)(VerfiyDetails);
