import { SearchBarProps, SearchScope } from './search-bar.types';
import useSearchBar from './use-search-bar';
import SearchBarBlock from '../../molecules/search-bar-block';
import SearchScopeAtom from '../../atoms/search-scope';
import SearchInputAtom from '../../atoms/search-input';
import SearchResultsBlock from '../../molecules/search-results-block';
import RecentResults from '../../molecules/recent-results';
import SearchResults from '../../molecules/search-results';
import SearchButtonAtom from '../../atoms/search-button';

const SearchBar = (props: SearchBarProps): JSX.Element => {
    const {
        searchScope,
        setSearchScope,
        searchValue,
        setSearchValue,
        filteredEntities,
        isFocused,
        setIsFocused,
        searchBlockRef,
        searchBlockWidth,
        endSearchCallback,
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
                setEnterCallback={endSearchCallback}
            />
            <SearchButtonAtom searchCallback={endSearchCallback} />
            <SearchResultsBlock
                isFocused={isFocused}
                searchBlockWidth={searchBlockWidth}
            >
                {searchValue.length < 3 && <RecentResults />}
                {searchValue.length > 2 && (
                    <SearchResults users={filteredEntities!} />
                )}
            </SearchResultsBlock>
        </SearchBarBlock>
    );
};

export default SearchBar;
