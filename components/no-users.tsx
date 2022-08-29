import { Box, Divider, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const NoUsers = () => {
    return (
        <>
            <Box
                padding="6"
                boxShadow="lg"
                bg="white"
                style={{ display: 'flex', flexDirection: 'row' }}
            >
                <div>
                    <SkeletonCircle size="10" />
                </div>
                <div style={{ width: '90%', marginLeft: '1rem' }}>
                    <SkeletonText mt="1" noOfLines={2} spacing="4" />
                </div>
            </Box>
            <Divider />
            <Box
                padding="6"
                boxShadow="lg"
                bg="white"
                style={{ display: 'flex', flexDirection: 'row' }}
            >
                <div>
                    <SkeletonCircle size="10" />
                </div>
                <div style={{ width: '90%', marginLeft: '1rem' }}>
                    <SkeletonText mt="1" noOfLines={2} spacing="4" />
                </div>
            </Box>
            <Divider />
            <Box
                padding="6"
                boxShadow="lg"
                bg="white"
                style={{ display: 'flex', flexDirection: 'row' }}
            >
                <div>
                    <SkeletonCircle size="10" />
                </div>
                <div style={{ width: '90%', marginLeft: '1rem' }}>
                    <SkeletonText mt="1" noOfLines={2} spacing="4" />
                </div>
            </Box>
            <Divider />
            <Box
                padding="6"
                boxShadow="lg"
                bg="white"
                style={{ display: 'flex', flexDirection: 'row' }}
            >
                <div>
                    <SkeletonCircle size="10" />
                </div>
                <div style={{ width: '90%', marginLeft: '1rem' }}>
                    <SkeletonText mt="1" noOfLines={2} spacing="4" />
                </div>
            </Box>
        </>
    );
};

export default NoUsers;
