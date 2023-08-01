import React from 'react';

import AppLayout from '../../components/dashboard/Layout/index';
import PortfolioComponent from '../../components/Portfolio/portfolioComponent';
const Portfolio = (props) => {
    return (
        <div>
            <AppLayout flag={props.flag}>
                <div>
                    <PortfolioComponent />
                </div>
            </AppLayout>
        </div>
    );
};
export default Portfolio;
