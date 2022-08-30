import React, { RefObject } from 'react';

export interface SearchBarBlockProps {
    isFocused: boolean;
    setFocusCallback: (focusState: boolean) => void;
    forwardedRef: RefObject<any>;
    children?: React.ReactNode;
}
