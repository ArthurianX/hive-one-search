import {
    SearchBarInnerProps,
    SearchBarProps,
    SearchScope,
} from './search-bar.types';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { HiveUsers } from '../../../pages/api/data.interface';
import { throttle } from 'lodash';
import { setRecentSearchResults } from '../../../services/recent-search-results';

const useSearchBar = ({
    users,
    communities,
    filteredCallback,
    overlayCallback,
}: SearchBarProps): SearchBarInnerProps => {
    const [searchScope, setSearchScope] = useState<SearchScope>(
        SearchScope.Users,
    );
    const [searchValue, setSearchValue] = useState<string>('');
    const [filteredEntities, setFilteredEntities] =
        useState<Partial<HiveUsers>>();
    const [searchBlockWidth, setSearchBlockWidth] = useState<number>(0);

    // NOTE: isFocused automatically means that the search results overlay is also open
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const searchBlockRef = useRef<HTMLDivElement>();

    const searchHandler = () => {
        // Do a loose search of an entire property of HiveUsers
        // TODO: FYI, this search is very impractical, I'll leave it like this for the moment
        let results: Partial<HiveUsers> | undefined = undefined;
        switch (searchScope) {
            case SearchScope.Communities:
                communities &&
                    Object.keys(communities).map((key, index) => {
                        const stringified = JSON.stringify(
                            // @ts-ignore
                            communities[key],
                        ).toLowerCase();

                        if (
                            searchValue &&
                            stringified.indexOf(searchValue.toLowerCase()) > -1
                            // NOTE: In the Task requirements, search is to be handled differently, this is more loose and with less checks.
                        ) {
                            !results ? (results = {}) : '';
                            // @ts-ignore
                            results[key] = communities[key];
                        }
                    });
                break;
            case SearchScope.Users:
                users &&
                    Object.keys(users).map((key, index) => {
                        const stringified = JSON.stringify(
                            // @ts-ignore
                            users[key],
                        ).toLowerCase();

                        if (
                            searchValue &&
                            stringified.indexOf(searchValue.toLowerCase()) > -1
                            // NOTE: In the Task requirements, search is to be handled differently, this is more loose and with less checks.
                        ) {
                            !results ? (results = {}) : '';
                            // @ts-ignore
                            results[key] = users[key];
                        }
                    });
                break;
            default:
        }
        setFilteredEntities(results);
    };

    const throttledSearchHandler = useMemo(
        () => throttle(searchHandler, 300),
        [searchValue],
    );

    const endSearchCallback = () => {
        if (filteredEntities) {
            searchHandler();
            setIsFocused(false);
            setSearchValue('');
            filteredCallback(filteredEntities);
            setRecentSearchResults(filteredEntities);
        }
    };

    useEffect(() => {
        // Note: When scope changes, redo the search
        searchHandler();
    }, [searchScope]);

    useEffect(() => {
        throttledSearchHandler();
    }, [searchValue]);

    useEffect(() => {
        // Set the blur 'overlay', easier than an actual overlay now.
        overlayCallback(isFocused);
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
                setSearchValue('');
                // setSearchScope(SearchScope.Users);
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
        filteredEntities,
        isFocused,
        setIsFocused,
        searchBlockRef,
        searchBlockWidth,
        endSearchCallback,
    };
};

export default useSearchBar;
