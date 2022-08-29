import {
    SearchBarInnerProps,
    SearchBarProps,
    SearchScope,
} from './search-bar.types';
import { useEffect, useState } from 'react';
import { HiveUsers } from '../../../pages/api/users.interface';

const useSearchBar = ({
    users,
    filteredCallback,
}: SearchBarProps): SearchBarInnerProps => {
    const [searchScope, setSearchScope] = useState<SearchScope>(
        SearchScope.Users,
    );
    const [searchValue, setSearchValue] = useState<string>('');
    const [filteredUsers, setFilteredUsers] = useState<Partial<HiveUsers>>();

    // NOTE: isFocused automatically means that the search results overlay is also open
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useEffect(() => {
        console.log('SearchScope has changed', searchScope);
    }, [searchScope]);

    useEffect(() => {
        // TODO: Throttle this
        // TODO: Search users and set filtered users
        console.log('searchValue has changed', searchValue);
    }, [searchValue]);

    useEffect(() => {
        console.log('isFocused has changed', isFocused);
        if (isFocused && searchValue === '') {
            // TODO: open overlay
            // TODO: load local storage recent searched
        } else if (isFocused && searchValue !== '') {
        } else {
            // NOTE: Handle losing of focus, clicking outside
        }
    }, [isFocused]);

    return {
        searchScope,
        setSearchScope,
        searchValue,
        setSearchValue,
        filteredUsers,
        isFocused,
        setIsFocused,
    };
};

export default useSearchBar;
