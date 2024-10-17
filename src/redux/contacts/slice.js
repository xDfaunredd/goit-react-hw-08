import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchAllContacts } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const pendingProcessing = (state) => {
  state.error = null;
  state.loading = true;
};

const rejectedCase = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, pendingProcessing)
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllContacts.rejected, rejectedCase)
      .addCase(addContact.pending, pendingProcessing)
      .addCase(addContact.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, rejectedCase)
      .addCase(deleteContact.pending, pendingProcessing)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, rejectedCase);
  },
});

export const contactsSlice = slice.reducer;
