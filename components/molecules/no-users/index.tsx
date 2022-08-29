import { Box, Divider, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import SkeletonUser from '../../atoms/skeleton-user';

const SkeletonNoUsers = () => {
    return (
        <>
            <SkeletonUser />
            <Divider />
            <SkeletonUser />
            <Divider />
            <SkeletonUser />
            <Divider />
            <SkeletonUser />
        </>
    );
};

export default SkeletonNoUsers;
