// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { createSaleAction } from '../../../redux/actions/selfHostedIDO/action.self';
const VerfiyDetails = ({
    projectName,
    tokenName,
    description,
    logoURL,
    telegram,
    twitter,
    websiteLink,
    github,
    medium,
    createSaleAction,
    handleBack,
}) => {
    const handleOnSubmit = async () => {
        try {
            const op = await createSaleAction('asd');
            console.log(op);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='card pool shadow-sm h-100 border-10 mt-5'>
            <div className='card-body'>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Project name</div>
                    <div>{projectName}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Token name</div>
                    <div>{tokenName}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Description</div>
                    <div>{description}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Logo URL</div>
                    <div>{logoURL}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Telegram</div>
                    <div>{telegram}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Twitter</div>
                    <div>{twitter}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Website</div>
                    <div>{websiteLink}</div>
                </div>
                <div className='d-flex justify-content-between py-3 card-header-border-bottom'>
                    <div>Github</div>
                    <div>{github}</div>
                </div>
                <div className='d-flex justify-content-between py-3 '>
                    <div>Medium</div>
                    <div>{medium}</div>
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
const mapStateToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(VerfiyDetails);
