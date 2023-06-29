// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';

import { IDO_CONFIG } from '../../../config/Launchpad/Ido/IdoConfig';
import { IdoProjectDetails } from '../../../redux/actions/selfHostedIDO/action.self';
import Pagination from '../../../hooks/pagination';
import Stepper from '../../Stepper/Stepper';
import TempCards from './TempCards';
import { fetchInstaStorage } from '../../../redux/actions/staking/action.staking';

const IdoSale = (props) => {
    const { selfIdoProjects } = props;
    const { stakedamount } = props.stakingDetails;
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 7;
    const args = {
        poolStake: 'ACTIVE',
    };
    const fetchData = async () => {
        await props.IdoProjectDetails();
        await props.fetchInstaStorage(args);
    };

    React.useEffect(() => {
        fetchData();
    }, []);
    let SALES = [];
    if (selfIdoProjects.success) {
        SALES = selfIdoProjects.data.sort(function (a, b) {
            const aDate = new Date(a.time.public.start);
            const bDate = new Date(b.time.public.start);
            if (
                new Date() < aDate &&
                new Date() < new Date(a.time.public.end) &&
                new Date() < bDate &&
                new Date() < new Date(b.time.public.end)
            ) {
                return aDate - bDate;
            } else {
                return bDate - aDate;
            }
        });
    }
    const combineData = [...SALES, ...IDO_CONFIG];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = combineData.slice(startIndex, endIndex);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div>
            <div className='row row-cols-1 text-dark-to-light mt-3  project-layout g-4  mx-0 mx-lg-3 mx-md-3 '>
                <div className='d-flex flex-column flex-lg-row'>
                    <div className='p-2 w-100 text-center'>
                        <div className='col w-100'>
                            <h4 className='fw-600 text-center form-header text-nowrap'>
                                Welcome to Launchpad
                            </h4>
                            <p className='text-center font-insta-regular'>
                                Decentralised fundraising launchpad for new
                                tokens
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {currentPage === 1 && (
                <div
                    className='my-2 my-lg-5 my-md-5 
                    my-sm-5 mb-lg-0 text-dark-to-light
                    mb-md-0 row 
                    mx-0 mx-lg-3 mx-md-3'
                >
                    {currentPageItems.map((item, index) => {
                        if (index === 0) {
                            return (
                                <div
                                    key={index}
                                    className='row mx-0 px-0 d-flex justify-content-center align-items-center'
                                >
                                    <div className='col-sm-12 col-lg-4'>
                                        <TempCards {...item} />
                                    </div>
                                    <div className='col-12 my-3 my-lg-0 col-lg-8 m-auto'>
                                        <Stepper
                                            projectdata={item}
                                            stakedamount={stakedamount}
                                        />
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            )}

            <div
                className='my-2 my-lg-5 my-md-5 my-sm-5 
                    px-0 mb-lg-0 text-dark-to-light mb-md-0 
                    row row-cols-1 row-cols-xxl-3 row-cols-lg-2 
                    row-cols-md-1 row-cols-sm-1
                    mx-0 mx-lg-3 mx-md-3'
            >
                {currentPageItems.map((elem, index) => {
                    if ((currentPage === 1 && index !== 0) || currentPage > 1) {
                        return <TempCards {...elem} key={index} />;
                    }
                })}
            </div>
            <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={combineData.length}
                onPageChange={handlePageChange}
            />
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    IdoProjectDetails: (payload) => dispatch(IdoProjectDetails(payload)),
    fetchInstaStorage: (payload) => dispatch(fetchInstaStorage(payload)),
});
const mapStateToProps = (state) => ({
    selfIdoProjects: state.selfIdoProjects,
    stakingDetails: state.stakingDetails,
});
export default connect(mapStateToProps, mapDispatchToProps)(IdoSale);
