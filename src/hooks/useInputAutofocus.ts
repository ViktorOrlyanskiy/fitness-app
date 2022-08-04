import { useRef, useEffect } from 'react';

export function useInputAutofocus(isActive: boolean) {
    const inputRef = useRef<any>(null);

    useEffect(() => {
        if (isActive) inputRef?.current?.focus();
    }, [isActive]);

    return inputRef;
}

// реализует autofocus у нужного инпута
