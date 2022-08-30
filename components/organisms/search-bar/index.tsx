import { SearchBarProps, SearchScope } from './search-bar.types';
import useSearchBar from './use-search-bar';
import SearchBarBlock from '../../molecules/search-bar-block';
import SearchScopeAtom from '../../atoms/search-scope';
import SearchInputAtom from '../../atoms/search-input';
import SearchResultsBlock from '../../molecules/search-results-block';

const SearchBar = (props: SearchBarProps): JSX.Element => {
    const {
        searchScope,
        setSearchScope,
        searchValue,
        setSearchValue,
        filteredUsers,
        isFocused,
        setIsFocused,
        searchBlockRef,
        searchBlockWidth,
    } = useSearchBar(props);
    // NOTE: This is also the brain of this organism, all other atoms should be as functional as possible.

    return (
        <SearchBarBlock
            forwardedRef={searchBlockRef}
            isFocused={isFocused}
            setFocusCallback={setIsFocused}
        >
            <SearchScopeAtom
                searchScope={searchScope}
                searchScopeCallback={setSearchScope}
            />
            <SearchInputAtom
                searchValue={searchValue}
                setValueCallback={setSearchValue}
            />
            <SearchResultsBlock
                isFocused={isFocused}
                searchBlockWidth={searchBlockWidth}
            >
                <div>a</div>
            </SearchResultsBlock>
        </SearchBarBlock>
    );
};

export default SearchBar;
