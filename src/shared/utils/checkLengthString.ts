export const checkLengthString = (string: string, lenght: number) => {
    if (string.length > lenght) {
        const result = string
            .split('')
            .filter((_, index) => index < lenght - 3)
            .join('');
        return result + '...';
    } else {
        return string;
    }
};
