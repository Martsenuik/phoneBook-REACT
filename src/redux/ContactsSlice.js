import { createSlice } from "@reduxjs/toolkit";

const contactInitialState = {
    contacts: [
      { id: 0, name: "Alina", number: "1234567890" },
      { id: 1, name: "Julia", number: "0987654321" },
  ],
  filter: ""
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactInitialState, 
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(contact => contact.id === action.payload)
        },
        filterContact(state, action){ 
      state.filter = action.payload;
    }
    },
})

export const { addContact, deleteContact, filterContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer















