import React from 'react';
import { connect } from 'react-redux';

import { FetchProjectData } from '../../../redux/actions/selfHostedIDO/action.self';

const AdminDetails = (props) => {
    const fetchData = async () => {
        await props.FetchProjectData();
    };
    React.useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='col-md-12 col-lg mw-100 h-100 py-4 py-md-0 mt-md-4 p-0'>
            <div className='card  shadow-sm h-100 border-10'>
                <div className='card-body'>
                    <div className='d-flex justify-content-between card-header-border-bottom py-3'>
                        Token Address
                        <div>{props.AdminProjectData.tokenAddress}</div>
                    </div>
                    <div className='d-flex justify-content-between card-header-border-bottom py-3'>
                        Token decimals
                        <div>{props.AdminProjectData.decimals}</div>
                    </div>
                    <div className='d-flex justify-content-between card-header-border-bottom py-3'>
                        Token Id
                        <div>{props.AdminProjectData.tokenId}</div>
                    </div>
                    <div className='d-flex justify-content-between card-header-border-bottom py-3'>
                        Presale Start Time
                        <div>{props.AdminProjectData.presaleStartTime}</div>
                    </div>
                    <div className='d-flex justify-content-between card-header-border-bottom py-3'>
                        Presale End Time
                        <div>{props.AdminProjectData.presaleEndTime}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    FetchProjectData: (payload) => dispatch(FetchProjectData(payload)),
});
const mapStateToProps = (state) => ({
    AdminProjectData: state.AdminProjectData,
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminDetails);
