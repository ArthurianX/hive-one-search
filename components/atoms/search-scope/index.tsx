import { ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Select } from '@chakra-ui/react';
import { SearchScope } from '../../organisms/search-bar/search-bar.types';
import { SearchScopeProps } from './search-scope.types';
import styles from './search-scope.module.scss';

const SearchScopeAtom = ({
    searchScope,
    searchScopeCallback,
}: SearchScopeProps): JSX.Element => {
    return (
        <Box width={145}>
            <Select
                className={styles.hiveSelect}
                icon={<ArrowDownIcon />}
                value={searchScope}
                onChange={(event) => {
                    searchScopeCallback(
                        event.target.selectedOptions[0].value as SearchScope,
                    );
                }}
                variant="outline"
            >
                <option value={SearchScope.Users}>Users</option>
                <option value={SearchScope.Communities}>Communities</option>
            </Select>
        </Box>
    );
};

export default SearchScopeAtom;
