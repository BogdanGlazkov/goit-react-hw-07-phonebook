import axios from 'axios';

const BASE_URL =
  'https://633f1ea50dbc3309f3c54fc3.mockapi.io/contacts/contacts';

const fetchContacts = async () => {
  try {
    const result = await axios.get(BASE_URL);
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addContact = async contact => {
  try {
    return await axios.post(BASE_URL, contact);
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteContact = async contactId => {
  try {
    return await axios.delete(`${BASE_URL}/${contactId}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const API = {
  fetchContacts,
  addContact,
  deleteContact,
};
