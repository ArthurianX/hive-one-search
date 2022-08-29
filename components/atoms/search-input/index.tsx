import styled from 'styled-components';
import { SearchInputProps } from './search-input.types';
// import { useMemo } from 'react';
// import { throttle } from 'lodash';

const SearchInput = styled.input`
    display: flex;
    flex: 1;
    padding: 0 1rem;
    background: transparent;
    height: 4rem;
    border-radius: 0 2rem 2rem 0;
    align-self: center;
    outline: none;
    font-size: 1.2rem;
`;

const SearchInputAtom = (props: SearchInputProps) => {
    // const inputChangeHandler = (event: { target: { value: string } }) =>
    //     props.setValueCallback(event.target.value);
    // const throttledChangeHandler = useMemo(
    //     () => throttle(inputChangeHandler, 300),
    //     [],
    // );
    // NOTE: In a real work scenario, throttling IS necessary here, will ignore for now.

    // TODO: Maybe throttling should be done in the brain
    return (
        <SearchInput
            type={'text'}
            value={props.searchValue}
            // onChange={throttledChangeHandler}
            onChange={(event) => props.setValueCallback(event.target.value)}
        />
    );
};

export default SearchInputAtom;
