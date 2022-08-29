import { HiveUsers } from '../../../pages/api/users.interface';

export enum SearchScope {
    Users = 'Users',
    Communities = 'Communities',
}

export interface SearchBarProps {
    users: HiveUsers;
    filteredCallback: (users: Partial<HiveUsers>) => void;
}

export interface SearchBarInnerProps {
    filteredUsers: Partial<HiveUsers> | undefined;
    searchScope: SearchScope;
    setSearchScope: (scope: SearchScope) => void;
    searchValue: string;
    setSearchValue: (search: string) => void;
    isFocused: boolean;
    setIsFocused: (focusState: boolean) => void;
}
