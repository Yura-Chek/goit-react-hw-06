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
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const selectVisibleContacts = (state) => {
  const normalizedFilter = state.filters.filter.toLowerCase();
  return state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
