import { HiveUsers } from '../pages/api/data.interface';

const hiveKey = 'HiveOneRecentSearches';

export const getRecentSearchResults = (): Partial<HiveUsers> | undefined => {
    if (typeof window !== 'undefined') {
        const users = window.localStorage.getItem(hiveKey);
        if (users) {
            return JSON.parse(users);
        }
    }
};

export const setRecentSearchResults = (users: Partial<HiveUsers>): void => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        window.localStorage.setItem(hiveKey, JSON.stringify(users));
    }
};
