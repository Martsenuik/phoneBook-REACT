import { nanoid } from "nanoid";

export const addContact = (nameValue, numberValue) => {
    return {
        type: "contacts/addContact",
        payload: {
            id: nanoid(),
            name: nameValue,
            number: numberValue,
        }
    }
}

export const deleteContact = (contactId) => {
    return {
        type: "contacts/deleteContact",
        payload: contactId,
    }
} 


export const filterContact = (filterValue) => {
    return {
        type: "contacts/filterContact",
        payload: filterValue,
    }
}










