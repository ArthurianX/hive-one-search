import styled from 'styled-components';

const SearchBarBlockDiv = styled.div`
    display: flex;
    flex: 1;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    background: #fff;
    height: 4rem;
    border: 2px solid #ccc;
    border-radius: 2rem;
    align-self: center;
`;

const SearchBarBlock = (props: any) => {
    // search-bar-block-portal might not be needed here.
    return (
        <SearchBarBlockDiv id={'search-bar-block-portal'}>
            {props.children}
        </SearchBarBlockDiv>
    );
};

export default SearchBarBlock;
