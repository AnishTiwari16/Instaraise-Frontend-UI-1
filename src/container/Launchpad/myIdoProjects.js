import React from 'react';

import AppLayout from '../../components/dashboard/Layout/index';
import MyIdoSale from '../../components/Launchpad/Ido/MyIdoSale';
const MyIdoProjects = (props) => {
    return (
        <div>
            <AppLayout flag={props.flag}>
                <MyIdoSale />
            </AppLayout>
        </div>
    );
};

export default MyIdoProjects;
