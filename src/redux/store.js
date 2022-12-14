import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
