import { SearchBarProps, SearchScope } from './search-bar.types';
import useSearchBar from './use-search-bar';
import SearchBarBlock from '../../molecules/search-bar-block';
import { Select } from '@chakra-ui/react';

const SearchBar = (props: SearchBarProps): JSX.Element => {
    const {
        searchScope,
        setSearchScope,
        searchValue,
        setSearchValue,
        filteredUsers,
    } = useSearchBar(props);

    return (
        <SearchBarBlock>
            <Select
                value={searchScope}
                onChange={(event) => {
                    setSearchScope(
                        event.target.selectedOptions[0].value as SearchScope,
                    );
                }}
                variant="outline"
                placeholder="Search scope"
            >
                <option value={SearchScope.Users}>Users</option>
                <option value={SearchScope.Communities}>Communities</option>
            </Select>
        </SearchBarBlock>
    );
};

export default SearchBar;
