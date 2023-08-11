// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

const Shimmer = () => {
    function Media() {
        return (
            <Card
                sx={{
                    borderRadius: 4,
                    backgroundColor: '#fff',
                    width: '93%',
                    height: '100%',
                }}
            >
                <CardHeader
                    avatar={
                        <Skeleton
                            animation='wave'
                            variant='circular'
                            width={37}
                            height={37}
                        />
                    }
                    action={null}
                />

                <CardContent>
                    <React.Fragment>
                        <Skeleton
                            animation='wave'
                            height={15}
                            width={80}
                            style={{ marginBottom: 16 }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Skeleton
                                animation='wave'
                                height={10}
                                width={100}
                            />
                            <Skeleton animation='wave' height={10} width={20} />
                        </Box>
                        <Skeleton
                            variant='rounded'
                            width={'100%'}
                            height={30}
                            sx={{ marginTop: 8 }}
                        />
                    </React.Fragment>
                </CardContent>
            </Card>
        );
    }
    Media.propTypes = {
        loading: PropTypes.bool,
    };
    const mediaComponents = Array.from({ length: 6 }, (_, index) => (
        <div className='pb-5' key={index}>
            <Media loading />
        </div>
    ));
    return mediaComponents;
};

export default Shimmer;
