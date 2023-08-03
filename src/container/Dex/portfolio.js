import React from 'react';

import AppLayout from '../../components/dashboard/Layout/index';
import TestPortfolioComponent from '../../components/Portfolio/TestPortfolioComponent';
// import PortfolioComponent from '../../components/Portfolio/PortfolioComponent';
const Portfolio = (props) => {
    return (
        <div>
            <AppLayout flag={props.flag}>
                <div>
                    <TestPortfolioComponent />
                    {/* <PortfolioComponent /> */}
                </div>
            </AppLayout>
        </div>
    );
};
export default Portfolio;
