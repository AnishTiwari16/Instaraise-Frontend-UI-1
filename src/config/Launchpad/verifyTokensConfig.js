import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import truncateMiddle from 'truncate-middle';

const VerifyTokensConfig = ({ project }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const DATA = [
        {
            name: 'Token address',
            value: project.tokenAddress,
        },
        {
            name: 'Decimals',
            value: project.decimals,
        },
        {
            name: 'Token Id',
            value: project.tokenId,
        },
        {
            name: 'Total raise',
            value: project.totalRaise,
        },
        {
            name: 'Private Start Time',
            value: project.presaleStartTime.toString(),
        },
        {
            name: 'Private End Time',
            value: project.presaleEndTime.toString(),
        },
        {
            name: 'Private Sale Price',
            value: project.privateSalePrice,
        },
        {
            name: 'Public Start Time',
            value: project.publicStartTime.toString(),
        },
        {
            name: 'Public End Time',
            value: project.publicEndTime.toString(),
        },
        {
            name: 'Public max participation',
            value: project.publicMaxParticipation,
        },
        {
            name: 'Public Sale Price',
            value: project.publicSalePrice,
        },
        {
            name: 'Amount to sell',
            value: project.amountToSell,
        },
        {
            name: 'Max Tokens To LP',
            value: project.maxTokensToLp,
        },
        {
            name: 'Token Unlock Time',
            value: project.tokenUnlockTime.toString(),
        },
        {
            name: 'Percentage Revenue To LP',
            value: project.percentageRevenueToLP,
        },
        {
            name: 'lp Lockup Time',
            value: project.lpLockupTime.toString(),
        },

        {
            name: 'Token DEX Price',
            value: project.tokenDexPrice,
        },
        {
            name: 'Staking contract',
            value: project.stakingContract,
        },
        {
            name: 'timeBlock',
            value: project.timeBlock,
        },
        {
            name: 'Public Sale Whitelisted',
            value: project.isPublicSaleWhitelisted ? 'true' : 'false',
        },
        {
            name: 'Sale type',
            value: project.saleType === true ? 'Private' : 'Public',
        },
        {
            name: 'Project name',
            value: project.projectName,
        },
        {
            name: 'Token name',
            value: project.tokenName,
        },
        {
            name: 'Description',
            value: project.description,
        },
        {
            name: 'Logo URL',
            value: project.logoURL,
        },

        {
            name: 'Website',
            value: project.website,
        },
        {
            name: 'Telegram',
            value: project.telegram,
        },
        {
            name: 'Twitter',
            value: project.twitter,
        },

        {
            name: 'Github',
            value: project.github,
        },
        {
            name: 'Medium',
            value: project.medium,
        },
    ];
    return (
        <div className='row'>
            {DATA.map((elem) => {
                return (
                    <>
                        {(elem.name === 'Github' ||
                            elem.name === 'Telegram' ||
                            elem.name === 'Twitter' ||
                            elem.name === 'Medium') &&
                        !elem.value ? null : (
                            <>
                                <div className='col-6 card-header-border-bottom py-3'>
                                    {elem.name}
                                </div>
                                <div className='col-6 text-right card-header-border-bottom py-3'>
                                    {(elem.name === 'Token address' ||
                                        elem.name === 'Staking contract') &&
                                    isMobile
                                        ? truncateMiddle(
                                              elem.value,
                                              7,
                                              7,
                                              '...'
                                          )
                                        : elem.value}
                                </div>
                            </>
                        )}
                    </>
                );
            })}
        </div>
    );
};
const mapStateToProps = (state) => ({
    project: state.project,
});
export default connect(mapStateToProps)(VerifyTokensConfig);
