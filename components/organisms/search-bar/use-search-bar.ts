import {
    SearchBarInnerProps,
    SearchBarProps,
    SearchScope,
} from './search-bar.types';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { HiveUsers } from '../../../pages/api/data.interface';
import { throttle } from 'lodash';
import { setRecentSearchResults } from '../../../services/recent-search-results';
import { useRouter } from 'next/router';

const useSearchBar = ({
    users,
    communities,
    filteredCallback,
    overlayCallback,
}: SearchBarProps): SearchBarInnerProps => {
    // NOTE: If we are on a 'search' page, set the default values
    const router = useRouter();
    const { scope, term } = router.query;

    const [searchScope, setSearchScope] = useState<SearchScope>(
        (scope as SearchScope) || SearchScope.Users,
    );
    const [searchValue, setSearchValue] = useState<string>(
        (term as string) || '',
    );
    const [filteredEntities, setFilteredEntities] =
        useState<Partial<HiveUsers>>();
    const [searchBlockWidth, setSearchBlockWidth] = useState<number>(0);

    // NOTE: isFocused automatically means that the search results overlay is also open
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const searchBlockRef = useRef<HTMLDivElement>();

    const searchHandler = (scope: SearchScope, term: string) => {
        // Do a loose search of an entire property of HiveUsers
        // TODO: FYI, this search is very impractical, I'll leave it like this for the moment

        console.log('searchHandler for ', scope, term);
        let results: Partial<HiveUsers> | undefined = undefined;
        switch (scope) {
            case SearchScope.Communities:
                communities &&
                    Object.keys(communities).map((key, index) => {
                        const stringified = JSON.stringify(
                            // @ts-ignore
                            communities[key],
                        ).toLowerCase();

                        if (
                            term &&
                            stringified.indexOf(term.toLowerCase()) > -1
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
                            term &&
                            stringified.indexOf(term.toLowerCase()) > -1
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
        return results;
    };

    const throttledSearchHandler = useMemo(
        () => throttle(() => searchHandler(searchScope, searchValue), 300),
        [searchValue],
    );

    const endSearchCallback = () => {
        if (filteredEntities) {
            searchHandler(searchScope, searchValue);
            setIsFocused(false);
            setSearchValue('');
            filteredCallback(filteredEntities);
            setRecentSearchResults(filteredEntities);

            // NOTE: Shallowly push the query params
            router.push(
                `?scope=${searchScope}&term=${searchValue}`,
                undefined,
                { shallow: true },
            );
        }
    };

    useEffect(() => {
        // Note: When scope changes, redo the search
        searchHandler(searchScope, searchValue);
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
        // NOTE: Handle clicking outside the search container
        const handleClickOutside = (event: any) => {
            if (
                searchBlockRef.current &&
                !searchBlockRef.current.contains(event.target)
            ) {
                setIsFocused(false);
                setSearchValue('');
            }
        };
        document.addEventListener('click', handleClickOutside, true);

        // NOTE: Remove listener when unmounting.
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    useEffect(() => {
        if (scope && term) {
            setSearchScope(scope as SearchScope);
            setSearchValue(term as string);
            filteredCallback(
                searchHandler(scope as SearchScope, term as string)!,
            );
        }
    }, [users, communities]);

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
