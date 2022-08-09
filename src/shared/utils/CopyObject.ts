export const copyObject = (object: object | undefined) => {
    return JSON.parse(JSON.stringify(object));
};
