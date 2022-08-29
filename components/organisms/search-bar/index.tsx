import { SearchBarProps } from './search-bar.types';
import useSearchBar from './use-search-bar';

const SearchBar = (props: SearchBarProps): JSX.Element => {
    const {
        searchScope,
        setSearchScope,
        searchValue,
        setSearchValue,
        filteredUsers,
    } = useSearchBar(props);

    return <div></div>;
};

export default SearchBar;
