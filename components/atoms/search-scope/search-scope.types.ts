import { SearchScope } from '../../organisms/search-bar/search-bar.types';

export interface SearchScopeProps {
    searchScope: SearchScope;
    searchScopeCallback: (scope: SearchScope) => void;
}
