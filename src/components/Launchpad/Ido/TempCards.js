import React from 'react';
import Countdown from 'react-countdown';
import NumericLabel from 'react-pretty-numbers';
import { Link } from 'react-router-dom';
export const option = {
    justification: 'C',
    locales: 'en-AU',
    currency: false,
    percentage: false,
    precision: 0,
    wholenumber: null,
    commafy: true,
    shortFormat: true,
    shortFormatMinValue: 100,
    shortFormatPrecision: 1,
    title: true,
    cssClass: ['card-raise-value'],
};
const TempCards = (props) => {
    const START_TIME = new Date(props.time.public.start);
    const END_TIME = new Date(props.time.public.end);
    var countDownDate = new Date(props.time.public.end).getTime();
    var SALE_STATUS = '';
    var BUTTON_NAME = 'View info';
    var DISABLE_SALE = false;
    const XTZRate = props.tokenPrice.DEX;
    const todayDATE = new Date();
    if (todayDATE < START_TIME && todayDATE < END_TIME) {
        SALE_STATUS = 'Upcoming sale';
        DISABLE_SALE = true;
    }
    if (todayDATE > START_TIME && todayDATE < END_TIME) {
        SALE_STATUS = 'Ongoing sale';
        BUTTON_NAME = 'Enter sale';
        DISABLE_SALE = false;
    }
    if (todayDATE > START_TIME && todayDATE > END_TIME) {
        SALE_STATUS = 'Finished sale';

        if (props.PROJECT_NAME === 'Instaraise') {
            DISABLE_SALE = true;
        } else {
            DISABLE_SALE = false;
        }
    }
    const ALIAS = props.PROJECT_NAME
        ? props.PROJECT_NAME.split(' ').join('').toLowerCase()
        : props.ALIAS;

    const PROJECT_LINK = DISABLE_SALE ? '#' : `/launchpad/IDO/${ALIAS}`;
    return (
        <span className='launchpad-card py-3'>
            <div className='container'>
                <div className='card' data-label={SALE_STATUS}>
                    <div className='card__container pb-0'>
                        <img
                            src={props.ICON}
                            width={45}
                            style={{
                                marginTop: '-12px',
                                marginBottom: '15px',
                            }}
                            className='d-inline-block align-top me-2 rounded-circle'
                            alt='Project'
                        />
                        <h2 className='card__header form-header'>
                            {props.PROJECT_NAME}
                        </h2>
                        <div className='card__body font-insta-regular'>
                            <div className='text-dark-to-light'>
                                {countDownDate ? (
                                    <Countdown date={countDownDate} />
                                ) : (
                                    'TBA'
                                )}
                            </div>
                            <div className='body-details-container text-14'>
                                <div className='navbar navbar-light bg-transparent sale-def p-0'>
                                    <div className='text-14 '>Total raise</div>
                                    <div className='d-flex'>
                                        <NumericLabel params={option}>
                                            {props.AMOUNT_TO_RAISE}
                                        </NumericLabel>
                                        &nbsp;
                                        {props.CURRENCY}
                                    </div>
                                </div>
                                <div className='navbar navbar-light bg-transparent sale-def p-0'>
                                    <div className=''>Sale type</div>
                                    <div className=''>{props.SALE_TYPE}</div>
                                </div>

                                {!props.MULTI_SWAP_RATE ? (
                                    <div className='navbar navbar-light bg-transparent sale-def p-0'>
                                        <div className=''>Swap rate</div>

                                        <div>
                                            1 ꜩ ={' '}
                                            {(1 / XTZRate).PrecisionMaker(2)}
                                            &nbsp; {props.TOKEN_NAME}
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className='navbar navbar-light bg-transparent sale-def p-0'>
                                            <div className=''>Swap rate</div>
                                            <div>
                                                {props.SWAP_RATE_NON_FCFS}
                                            </div>
                                        </div>
                                        <div className='navbar navbar-light bg-transparent sale-def p-0'>
                                            <div className=''>
                                                FCFS swap rate
                                            </div>
                                            <div>{props.SWAP_RATE_FCFS}</div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='d-flex w-100 justify-content-end py-4 px-4'>
                        <Link
                            style={{
                                cursor: DISABLE_SALE
                                    ? 'not-allowed'
                                    : 'pointer',
                            }}
                            className='btn view-info-btn shadow'
                            to={PROJECT_LINK}
                        >
                            {BUTTON_NAME}
                        </Link>
                    </div>
                </div>
            </div>
        </span>
    );
};

export default TempCards;