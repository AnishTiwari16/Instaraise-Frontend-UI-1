// eslint-disable-next-line
import Datetime from 'react-datetime';
import React from 'react';

import 'react-datetime/css/react-datetime.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { connect } from 'react-redux';

const TokenDetails = ({ handleComplete, handleBack }) => {
    const [tokensToSell, setTokensToSell] = React.useState('');
    const [stakingContract, setStakingContract] = React.useState('');
    const [privateSalePrice, setPrivateSalePrice] = React.useState('');
    const [publicSalePrice, setPublicSalePrice] = React.useState('');
    const [publicMaxParticipation, setPublicMaxParticipation] =
        React.useState(0);
    const [decimals, setDecimals] = React.useState(0);
    const [tokenID, setTokenId] = React.useState(0);
    const [timeBlock, setTimeBlock] = React.useState(0);
    const [maxTokensToLp, setMaxTokensToLp] = React.useState('');
    const [presaleStartTime, setPresaleStartTime] = React.useState(new Date());
    const [presaleEndTime, setPresaleEndTime] = React.useState(new Date());
    const [publicStartTime, setPublicStartTime] = React.useState(new Date());
    const [publicEndTime, setPublicEndTime] = React.useState(new Date());
    const [tokenUnlockTime, setTokenUnlockTime] = React.useState(new Date());
    const [lpLockupTime, setLpLockupTime] = React.useState(new Date());
    const [tokenAddress, setTokenAddress] = React.useState('');
    const [tokenDexPrice, setTokenDexPrice] = React.useState('');
    const [isPublicSaleWhitelisted, setIsPublicSaleWhitelisted] =
        React.useState('');
    const [percentageRevenueToLP, setPercentageRevenueToLP] = React.useState(0);
    const [privateSaleAllocation, setPrivateSaleAllocation] =
        React.useState('');

    (function () {
        var forms = document.querySelectorAll('.needs-validation');

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
                'submit',
                function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    form.classList.add('was-validated');
                },
                false
            );
        });
    })();

    return (
        <div className='card pool shadow-sm h-100 border-10 mt-5'>
            <div className='card-body'>
                <p className='text-g text-center pb-3'>
                    Enter the details below
                </p>

                <div id='accordion' className='pb-4'>
                    <div className='card'>
                        <div
                            className='card-header card-header-border-bottom bg-white'
                            id='headingOne'
                        >
                            <h5 className='mb-0'>
                                <button
                                    className='btn btn-link'
                                    data-toggle='collapse'
                                    data-target='#collapseOne1'
                                    aria-expanded='true'
                                    aria-controls='collapseOne1'
                                >
                                    Token details
                                </button>
                            </h5>
                        </div>

                        <div
                            id='collapseOne1'
                            className='collapse show'
                            aria-labelledby='headingOne'
                            data-parent='#accordion'
                        >
                            <div className='card-body'>
                                <div className='form-group-2 text-start'>
                                    <label
                                        htmlFor='validationServer02'
                                        className='form-label text-start text-dark-to-light'
                                    >
                                        Token address
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='tzkt'
                                        className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                        id='validationServer02'
                                        name='description'
                                        value={tokenAddress}
                                        onChange={(e) =>
                                            setTokenAddress(e.target.value)
                                        }
                                        required
                                    />
                                    <div className='invalid-feedback'></div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Decimals
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='text'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='banner'
                                            value={decimals}
                                            onChange={(e) =>
                                                setDecimals(e.target.value)
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        token Id
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='tokenID'
                                            value={tokenID}
                                            onChange={(e) =>
                                                setTokenId(e.target.value)
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div
                            className='card-header card-header-border-bottom bg-white'
                            id='headingThree'
                        >
                            <h5 className='mb-0'>
                                <button
                                    className='btn btn-link collapsed'
                                    data-toggle='collapse'
                                    data-target='#collapseThree3'
                                    aria-expanded='false'
                                    aria-controls='collapseThree3'
                                >
                                    Private sale details
                                </button>
                            </h5>
                        </div>
                        <div
                            id='collapseThree3'
                            className='collapse'
                            aria-labelledby='headingThree'
                            data-parent='#accordion'
                        >
                            <div className='card-body'>
                                <div className='form-group-2 text-start'>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Private Start Time
                                    </label>
                                    <Datetime
                                        value={presaleStartTime}
                                        onChange={(e) =>
                                            setPresaleStartTime(e.toDate())
                                        }
                                    />
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        private End Time
                                    </label>
                                    <Datetime
                                        value={presaleEndTime}
                                        onChange={(e) =>
                                            setPresaleEndTime(e.toDate())
                                        }
                                    />
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        private Sale Allocation
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='privateSaleAllocation'
                                            value={privateSaleAllocation}
                                            onChange={(e) =>
                                                setPrivateSaleAllocation(
                                                    e.target.value
                                                )
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        private Sale Price
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='privateSalePrice'
                                            value={privateSalePrice}
                                            onChange={(e) =>
                                                setPrivateSalePrice(
                                                    e.target.value
                                                )
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div
                            className='card-header card-header-border-bottom bg-white'
                            id='headingFour'
                        >
                            <h5 className='mb-0'>
                                <button
                                    className='btn btn-link collapsed'
                                    data-toggle='collapse'
                                    data-target='#collapseFour4'
                                    aria-expanded='false'
                                    aria-controls='collapseFour4'
                                >
                                    Public sale details
                                </button>
                            </h5>
                        </div>
                        <div
                            id='collapseFour4'
                            className='collapse'
                            aria-labelledby='headingFive'
                            data-parent='#accordion'
                        >
                            <div className='card-body'>
                                <div className='form-group-2 text-start'>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        public Start Time
                                    </label>
                                    <Datetime
                                        value={publicStartTime}
                                        onChange={(e) =>
                                            setPublicStartTime(e.toDate())
                                        }
                                    />
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        public End Time
                                    </label>
                                    <Datetime
                                        value={publicEndTime}
                                        onChange={(e) =>
                                            setPublicEndTime(e.toDate())
                                        }
                                    />
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Public max participation
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='publicMaxParticipation'
                                            value={publicMaxParticipation}
                                            onChange={(e) =>
                                                setPublicMaxParticipation(
                                                    e.target.value
                                                )
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Public Sale Price
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='publicSalePrice'
                                            value={publicSalePrice}
                                            onChange={(e) =>
                                                setPublicSalePrice(
                                                    e.target.value
                                                )
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-header bg-white ' id='headingTwo'>
                            <h5 className='mb-0'>
                                <button
                                    className='btn btn-link collapsed'
                                    data-toggle='collapse'
                                    data-target='#collapseTwo2'
                                    aria-expanded='false'
                                    aria-controls='collapseTwo2'
                                >
                                    Additional info
                                </button>
                            </h5>
                        </div>
                        <div
                            id='collapseTwo2'
                            className='collapse'
                            aria-labelledby='headingTwo'
                            data-parent='#accordion'
                        >
                            <div className='card-body'>
                                <div className='form-group-2 text-start'>
                                    <label
                                        htmlFor='validationServer02'
                                        className='form-label text-start text-dark-to-light'
                                    >
                                        Amount to sell
                                    </label>
                                    <input
                                        type='number'
                                        placeholder='some placeholder'
                                        className='text-dark-to-light token-information text-14 input-bar form-control rounded'
                                        id='validationServer02'
                                        name='description'
                                        value={tokensToSell}
                                        onChange={(e) =>
                                            setTokensToSell(e.target.value)
                                        }
                                        required
                                    />
                                    <div className='invalid-feedback'></div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Max Tokens To LP
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='banner'
                                            value={maxTokensToLp}
                                            onChange={(e) =>
                                                setMaxTokensToLp(e.target.value)
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        token Unlock Time
                                    </label>
                                    <Datetime
                                        value={tokenUnlockTime}
                                        onChange={(e) =>
                                            setTokenUnlockTime(e.toDate())
                                        }
                                    />{' '}
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        Percentage Revenue To LP
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='maxSupply'
                                            value={percentageRevenueToLP}
                                            onChange={(e) =>
                                                setPercentageRevenueToLP(
                                                    e.target.value
                                                )
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>{' '}
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '1' }}
                                    >
                                        lp Lockup Time
                                    </label>
                                    <Datetime
                                        value={lpLockupTime}
                                        onChange={(e) =>
                                            setLpLockupTime(e.toDate())
                                        }
                                    />
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        token DEX Price
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='homepage'
                                            value={tokenDexPrice}
                                            onChange={(e) =>
                                                setTokenDexPrice(e.target.value)
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        staking Contract
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='text'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='stakingContract'
                                            value={stakingContract}
                                            onChange={(e) =>
                                                setStakingContract(
                                                    e.target.value
                                                )
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>{' '}
                                    <label
                                        htmlFor='validationServerUsername'
                                        className='form-label text-dark-to-light'
                                        style={{ zIndex: '5' }}
                                    >
                                        timeBlock
                                    </label>
                                    <div className='input-group has-validation'>
                                        <input
                                            type='number'
                                            className='text-dark-to-light text-14 token-information input-bar form-control rounded'
                                            name='timeBlock'
                                            value={timeBlock}
                                            onChange={(e) =>
                                                setTimeBlock(e.target.value)
                                            }
                                            placeholder='some placeholder'
                                            id='validationServerUsername'
                                            aria-describedby='inputGroupPrepend3 validationServerUsernameFeedback'
                                            required
                                        />
                                        <div className='invalid-feedback'></div>
                                    </div>
                                    <div className='py-4 '>
                                        <FormControl
                                            sx={{
                                                minWidth: '100%',
                                            }}
                                            size='small'
                                        >
                                            <InputLabel id='demo-select-small-label'>
                                                isPublicSaleWhitelisted
                                            </InputLabel>

                                            <Select
                                                labelId='demo-select-small-label'
                                                id='demo-select-small'
                                                value={isPublicSaleWhitelisted}
                                                label='Age'
                                                onChange={(e) =>
                                                    setIsPublicSaleWhitelisted(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <MenuItem value={10}>
                                                    True
                                                </MenuItem>
                                                <MenuItem value={20}>
                                                    False
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        className='sale-button btn px-5 shadow-sm button-primary'
                        onClick={handleComplete}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    wallet: state.wallet,
});
export default connect(mapStateToProps)(TokenDetails);
