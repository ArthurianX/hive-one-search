import styled from 'styled-components';
import { SearchResultsBlockProps } from './search-results-block.types';

const SearchResultsBlockDiv = styled.div`
    display: ${({ isFocused }: SearchResultsBlockProps) =>
        isFocused ? 'flex' : 'none'};
    flex: 1;
    flex-direction: column;
    margin: 0 0.5vw;
    padding: 1rem;
    height: 40rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #fff;
    align-self: center;
    position: absolute;
    top: 4.5rem;
    z-index: 10;
    overflow: auto;
    width: ${({ searchBlockWidth }: SearchResultsBlockProps) =>
        searchBlockWidth ? searchBlockWidth + 'px' : '90vw'};
`;

const SearchResultsBlock = (props: SearchResultsBlockProps) => {
    return (
        <SearchResultsBlockDiv {...props}>
            {props.children}
        </SearchResultsBlockDiv>
    );
};

export default SearchResultsBlock;
