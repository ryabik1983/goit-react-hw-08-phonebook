import axios from 'axios';

axios.defaults.baseURL = 'https://61efe336732d93001778e67c.mockapi.io';

export async function fetchContacts(config) {
  const { data } = await axios.get('/contacts', config);
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post('/contacts/contacts', contact);
  return data;
}

export async function deleteContacts(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);

  return { ...data, contactId };
}