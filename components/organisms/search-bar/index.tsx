import { SearchBarProps, SearchScope } from './search-bar.types';
import useSearchBar from './use-search-bar';
import SearchBarBlock from '../../molecules/search-bar-block';
import SearchScopeAtom from '../../atoms/search-scope';
import SearchInputAtom from '../../atoms/search-input';

const SearchBar = (props: SearchBarProps): JSX.Element => {
    const {
        searchScope,
        setSearchScope,
        searchValue,
        setSearchValue,
        filteredUsers,
        isFocused,
        setIsFocused,
    } = useSearchBar(props);
    // NOTE: This is also the brain of this organism, all other atoms should be as dumb as possible.

    return (
        <SearchBarBlock isFocused={isFocused} setFocusCallback={setIsFocused}>
            <SearchScopeAtom
                searchScope={searchScope}
                searchScopeCallback={setSearchScope}
            />
            <SearchInputAtom
                searchValue={searchValue}
                setValueCallback={setSearchValue}
            />
        </SearchBarBlock>
    );
};

export default SearchBar;
