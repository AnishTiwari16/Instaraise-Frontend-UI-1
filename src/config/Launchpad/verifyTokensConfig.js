import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import truncateMiddle from 'truncate-middle';

const VerifyTokensConfig = ({ project }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const DATA = [
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
            value: project.totalRaise + ' ' + 'USD',
        },
        {
            name: 'Start time',
            value: project.publicStartTime.toString(),
        },
        {
            name: 'End time',
            value: project.publicEndTime.toString(),
        },
        {
            name: 'Max participation',
            value: project.publicMaxParticipation,
        },
        {
            name: 'Sale price',
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
            name: 'Time block',
            value: project.timeBlock,
        },
        {
            name: 'Min allocation',
            value: project.minAllocation,
        },
        {
            name: 'Max allocation',
            value: project.maxAllocation,
        },
        {
            name: 'Sale Whitelisted',
            value: project.isPublicSaleWhitelisted ? 'true' : 'false',
        },
    ];
    return (
        <div className='row'>
            {DATA.map((elem, index) => {
                return (
                    <React.Fragment key={index}>
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
                    </React.Fragment>
                );
            })}
        </div>
    );
};
const mapStateToProps = (state) => ({
    project: state.project,
});
export default connect(mapStateToProps)(VerifyTokensConfig);
