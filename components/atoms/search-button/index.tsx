import styled from 'styled-components';
import { Search2Icon } from '@chakra-ui/icons';

const SearchButton = styled.button`
    background-color: #ccc;
    padding: 0 1.2rem 0 1rem;
    height: 3.75rem;
    border-radius: 0 2rem 2rem 0;
    align-self: center;
    outline: none;
`;

const SearchButtonAtom = ({
    searchCallback,
}: {
    searchCallback: () => void;
}) => {
    return (
        <SearchButton onClick={searchCallback}>
            <Search2Icon />
        </SearchButton>
    );
};

export default SearchButtonAtom;
