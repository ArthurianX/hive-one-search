import { Box, Divider, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { HiveSearchEntity } from '../../../pages/api/data.interface';

const User = ({ user }: { user: HiveSearchEntity }): JSX.Element => {
    // NOTE: Maybe this could have been split better in the atomic design ideology.
    return (
        <>
            <Box
                padding="6"
                boxShadow="lg"
                bg="white"
                style={{ display: 'flex', flexDirection: 'row' }}
            >
                <div>
                    <SkeletonCircle
                        size="10"
                        startColor={user.themeColor.hex}
                        endColor={user.themeColor.hex}
                    >
                        {user.category!.length > 0 && user.category![0].emoji}
                    </SkeletonCircle>
                </div>
                <div style={{ width: '90%', marginLeft: '1rem' }}>
                    {user.name} <br />
                    <small>
                        {user.category!.length > 0 && user.category![0].emoji}{' '}
                        {user.seedPhrase} - <strong>{user.symbol}</strong>
                    </small>
                </div>
            </Box>
            <Divider />
        </>
    );
};

export default User;
