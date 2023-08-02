// eslint-disable-next-line
import React from 'react';
import PaginationSection from '@mui/material/Pagination';
import { Box } from '@mui/material';

import { ThemeContext } from '../routes/root';

const Pagination = ({
    currentPage,
    itemsPerPage,
    totalItems,
    onPageChange,
}) => {
    const { theme } = React.useContext(ThemeContext);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (_, page) => {
        onPageChange(page);
    };
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 5 }}>
            <PaginationSection
                sx={{
                    '& .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root':
                        {
                            color: theme ? '#4E5D78 ' : '#FFFFFF',
                        },
                }}
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                variant='outlined'
                shape='rounded'
            />
        </Box>
    );
};

export default Pagination;
