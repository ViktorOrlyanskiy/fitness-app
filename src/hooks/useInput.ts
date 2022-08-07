import React, { useEffect, useState } from 'react';

export function useInput(initialValue: string, clearing?: boolean) {
    const [value, setValue] = useState<string>(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        if (clearing) {
            setValue(initialValue);
        }
    }, [initialValue, clearing]);

    return { value, onChange };
}

// применение в компоненте
// const username = useInput("", clearing);
// <input {...username} placeholder="Username" />;
