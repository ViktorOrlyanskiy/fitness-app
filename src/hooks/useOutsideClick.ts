import React, { useCallback, useEffect } from 'react';

export function useOutsideClick(
    ref: React.MutableRefObject<any>,
    active: boolean,
    setActive: (arg1: boolean) => void
) {
    const listener = useCallback(
        (e: MouseEvent | TouchEvent) => {
            const node = ref.current;
            if (!node || node.contains(e.target)) {
                return;
            }

            if (active) {
                setActive(false);
            }
        },
        [ref, setActive, active]
    );

    useEffect(() => {
        if (active) {
            setTimeout(() => {
                document.addEventListener('click', listener);
                document.addEventListener('touchstart', listener);
            }, 500);
        }

        return () => {
            document.removeEventListener('click', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [active, listener]);
}
