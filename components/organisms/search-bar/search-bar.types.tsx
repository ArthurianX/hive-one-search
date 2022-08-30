import { HiveUsers } from '../../../pages/api/data.interface';
import { RefObject } from 'react';

export enum SearchScope {
    Users = 'Users',
    Communities = 'Communities',
}

export interface SearchBarProps {
    users: HiveUsers;
    communities: Partial<HiveUsers>;
    filteredCallback: (users: Partial<HiveUsers>) => void;
    overlayCallback: (isFocused: boolean) => void;
}

export interface SearchBarInnerProps {
    filteredEntities: Partial<HiveUsers> | undefined;
    searchScope: SearchScope;
    setSearchScope: (scope: SearchScope) => void;
    searchValue: string;
    setSearchValue: (search: string) => void;
    isFocused: boolean;
    setIsFocused: (focusState: boolean) => void;
    searchBlockRef: RefObject<any>; // TODO: Type this properly
    searchBlockWidth: number;
    endSearchCallback: () => void;
}
