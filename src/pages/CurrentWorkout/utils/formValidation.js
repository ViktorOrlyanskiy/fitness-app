export const formValidation = (values) => {
    let isValidation = true;

    for (let value of values) {
        if (value === '') {
            isValidation = false;
        }
    }
    return isValidation
}

export const clearInputs = (values) => {
    for (let value of values) {
        value('')
    }
}