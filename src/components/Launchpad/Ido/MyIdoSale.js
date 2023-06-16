// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';

import { IdoProjectDetails } from '../../../redux/actions/selfHostedIDO/action.self';
import Pagination from '../../../hooks/pagination';
import TempCards from './TempCards';

const MyIdoSale = (props) => {
    const { selfIdoProjects, wallet } = props;
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 7;
    const fetchData = async () => {
        await props.IdoProjectDetails();
    };
    React.useEffect(() => {
        fetchData();
    }, []);
    let MY_PROJECT = [];
    if (selfIdoProjects.success) {
        MY_PROJECT = selfIdoProjects.data
            .filter((elem) => {
                return elem.admin === wallet;
            })
            .sort(function (a, b) {
                const aDate = new Date(a.time.public.start);
                const bDate = new Date(b.time.public.start);
                return bDate - aDate;
            });
    }
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
                                Your Launchpad
                            </h4>
                            <p className='text-center font-insta-regular'>
                                Collections of your launchpads
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='my-2 my-lg-5 my-md-5 my-sm-5 
                    px-0 mb-lg-0 text-dark-to-light mb-md-0 
                    row row-cols-1 row-cols-xxl-3 row-cols-lg-2 
                    row-cols-md-1 row-cols-sm-1
                    mx-0 mx-lg-3 mx-md-3'
            >
                {MY_PROJECT.map((elem, index) => {
                    return <TempCards {...elem} key={index} />;
                })}
            </div>
            <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={MY_PROJECT.length}
                onPageChange={handlePageChange}
            />
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    IdoProjectDetails: (payload) => dispatch(IdoProjectDetails(payload)),
});
const mapStateToProps = (state) => ({
    wallet: state.wallet,
    selfIdoProjects: state.selfIdoProjects,
});
export default connect(mapStateToProps, mapDispatchToProps)(MyIdoSale);
