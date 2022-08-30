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
            onKeyUp={(event) => {
                if (
                    event.key === 'Enter' ||
                    event.keyCode === 13 ||
                    event.which === 13
                ) {
                    // @ts-ignore
                    props.setEnterCallback(event.target.value);

                    // TODO: There's a problem here, we need to blur the input on ENTER,
                    //  but ONLY when there are results, I will not handle this case here.
                    // @ts-ignore
                    event.target.blur();
                }
            }}
        />
    );
};

export default SearchInputAtom;
