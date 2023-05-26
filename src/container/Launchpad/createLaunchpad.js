import React from 'react';

import AppLayout from '../../components/dashboard/Layout/index';
import CreateLaunchpad from '../../components/Launchpad/CreateLaunchpad';
const CreateLaunchpadContainer = (props) => {
    return (
        <div>
            <AppLayout flag={props.flag}>
                <CreateLaunchpad />
            </AppLayout>
        </div>
    );
};

export default CreateLaunchpadContainer;
