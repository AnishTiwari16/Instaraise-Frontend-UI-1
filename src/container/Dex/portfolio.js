import React from 'react';

import AppLayout from '../../components/dashboard/Layout/index';
import UserPortfolioComponent from '../../components/Portfolio/UserPortfolioComponent';
const Portfolio = (props) => {
    return (
        <div>
            <AppLayout flag={props.flag}>
                <div>
                    <UserPortfolioComponent />
                </div>
            </AppLayout>
        </div>
    );
};
export default Portfolio;
