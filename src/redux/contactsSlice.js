import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items = [action.payload, ...state.items];
    },
    deleteContact(state, action) {
      state.items = state.items.filter(function (item) {
        return item.id !== action.payload;
      });
    },
  },
});

function selectContacts(state) {
  return state.contacts.items;
}

const { addContact, deleteContact } = contactsSlice.actions;

export { selectContacts, addContact, deleteContact };
export default contactsSlice.reducer;
