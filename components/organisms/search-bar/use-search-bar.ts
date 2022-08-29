import {
    SearchBarInnerProps,
    SearchBarProps,
    SearchScope,
} from './search-bar.types';
import { useEffect, useState } from 'react';

const useSearchBar = ({
    users,
    filteredCallback,
}: SearchBarProps): SearchBarInnerProps => {
    const [searchScope, setSearchScope] = useState(SearchScope.Users);
    const [searchValue, setSearchValue] = useState('');
    const [filteredUsers, setFilteredUsers] = useState();

    useEffect(() => {
        console.log('SearchScope has changed', searchScope);
    }, [searchScope]);

    return {
        searchScope,
        setSearchScope,
        searchValue,
        setSearchValue,
        filteredUsers,
    };
};

export default useSearchBar;
