import { HiveUsers } from '../pages/api/users.interface';

const hiveKey = 'HiveOneRecentSearches';

export const getRecentSearchResults = async (): Promise<
    Partial<HiveUsers> | false
> => {
    const users = await window.localStorage.getItem(hiveKey);
    if (users) {
        return JSON.parse(users);
    } else {
        return false;
    }
};

export const setRecentSearchResults = async (
    users: Partial<HiveUsers>,
): Promise<void> => window.localStorage.setItem(hiveKey, JSON.stringify(users));
