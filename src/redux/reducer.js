import { combineReducers } from "redux"

const contactInitialState = {
    contacts: [
      { id: 0, name: "Alina", number: "1234567890" },
      { id: 1, name: "Liza", number: "0987654321" },
  ],
  filter: ""
}

const contactsReducer = (state = contactInitialState, action) => {
    switch (action.type) {
        case "contacts/addContact":
            return{
             ...state,
            contacts: [...state.contacts, action.payload]
             }
        case "contacts/deleteContact":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            } 
       case "contacts/filterContact":
            
            return {
                ...state,
                filter: action.payload
            }
    
     default:
      return state;
  }
}

export const rootReducer = combineReducers({
    contacts: contactsReducer,
})






