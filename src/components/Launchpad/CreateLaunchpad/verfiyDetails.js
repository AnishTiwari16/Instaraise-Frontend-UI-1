import React from 'react';
import { connect } from 'react-redux';

const VerfiyDetails = ({
    setActiveStep,
    projectNameReducer,
    tokenNameReducer,
}) => {
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div className='card pool shadow-sm h-100 border-10 mt-5'>
            <div className='card-body'>
                <div className='d-flex justify-content-between py-2'>
                    <div>Project name</div>
                    <div>{projectNameReducer}</div>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <div>Token name</div>
                    <div>{tokenNameReducer}</div>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <div>asdf</div>
                    <div>asdf</div>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <div>asdf</div>
                    <div>asdf</div>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <div>asdf</div>
                    <div>asdf</div>
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
                        // onClick={handleComplete}
                    >
                        Create sale
                    </button>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    projectNameReducer: state.projectNameReducer,
    tokenNameReducer: state.tokenNameReducer,
});
export default connect(mapStateToProps)(VerfiyDetails);
