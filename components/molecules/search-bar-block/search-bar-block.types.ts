import React from 'react';

export interface SearchBarBlockProps {
    isFocused: boolean;
    setFocusCallback: (focusState: boolean) => void;
    children?: React.ReactNode;
}
