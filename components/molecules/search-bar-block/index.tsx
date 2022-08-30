import styled from 'styled-components';
import { SearchBarBlockProps } from './search-bar-block.types';

const SearchBarBlockDiv = styled.div`
    display: flex;
    flex: 1;
    margin: 0.5rem 1rem;
    background: #fff;
    height: 4rem;
    border: 2px solid;
    border-radius: 2rem;
    align-self: center;
    position: relative;
    border-color: ${({ isFocused }: SearchBarBlockProps) =>
        isFocused ? '#3182ce' : '#ccc'};
`;

const SearchBarBlock = (props: SearchBarBlockProps) => {
    return (
        <SearchBarBlockDiv
            onClick={() => {
                props.setFocusCallback(true);
            }}
            ref={props.forwardedRef}
            {...props}
        >
            {props.children}
        </SearchBarBlockDiv>
    );
};

export default SearchBarBlock;
