import {
    SearchBarInnerProps,
    SearchBarProps,
    SearchScope,
} from './search-bar.types';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { HiveUsers } from '../../../pages/api/users.interface';

const useSearchBar = ({
    users,
    filteredCallback,
    overlayCallback,
}: SearchBarProps): SearchBarInnerProps => {
    const [searchScope, setSearchScope] = useState<SearchScope>(
        SearchScope.Users,
    );
    const [searchValue, setSearchValue] = useState<string>('');
    const [filteredUsers, setFilteredUsers] = useState<Partial<HiveUsers>>();
    const [searchBlockWidth, setSearchBlockWidth] = useState<number>(0);

    // NOTE: isFocused automatically means that the search results overlay is also open
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const searchBlockRef = useRef<HTMLDivElement>();

    useEffect(() => {
        console.log('SearchScope has changed', searchScope);
    }, [searchScope]);

    useEffect(() => {
        // TODO: Throttle this
        // TODO: Search users and set filtered users
        console.log('searchValue has changed', searchValue);
    }, [searchValue]);

    useEffect(() => {
        // Set the blur 'overlay', easier than an actual overlay now.
        overlayCallback(isFocused);

        console.log('isFocused has changed', isFocused);
        if (isFocused && searchValue === '') {
            // TODO: open overlay
            // TODO: load local storage recent searched
        } else if (isFocused && searchValue !== '') {
        } else {
            // NOTE: Handle losing of focus, clicking outside
        }
    }, [isFocused]);

    useLayoutEffect(() => {
        // NOTE: There's a gotcha in Next.js about useLayoutEffect, maybe I'll get to fix this as well
        const sizes = searchBlockRef.current!.getBoundingClientRect();
        setSearchBlockWidth(sizes.width);
    }, [searchBlockRef.current]);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                searchBlockRef.current &&
                !searchBlockRef.current.contains(event.target)
            ) {
                setIsFocused(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return {
        searchScope,
        setSearchScope,
        searchValue,
        setSearchValue,
        filteredUsers,
        isFocused,
        setIsFocused,
        searchBlockRef,
        searchBlockWidth,
    };
};

export default useSearchBar;
