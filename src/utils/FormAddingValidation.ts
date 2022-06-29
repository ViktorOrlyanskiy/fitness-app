import React from "react"
import { IExercise } from "types";


export const formValidation = (values: string[]) => {
    let isValidation = true;
    for (let value of values) {
        if (value === '') isValidation = false;
    }
    return isValidation
}

export const clearInputs = (
    states: React.Dispatch<React.SetStateAction<string>>[]
) => {
    for (let state of states) {
        state('')
    }
}

export const getStatus = (array: IExercise[]) => {
    return (array.length > 0) ? false : true;
}