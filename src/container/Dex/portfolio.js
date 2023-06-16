import React from 'react';

import AppLayout from '../../components/dashboard/Layout/index';
// import LiquidityPositionTable from '../../components/Dex/ManageLiquidity/LiquidityPositionTable';
import PortfolioComponent from '../../components/Portfolio/portfolioComponent';
const Portfolio = () => {
    return (
        <div>
            <AppLayout>
                <div>
                    <PortfolioComponent />
                </div>
            </AppLayout>
        </div>
    );
};
export default Portfolio;
