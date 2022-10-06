import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations';
import { ContactsItem } from 'components/Contacts-item';
import s from './Contacts-list.module.css';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items, shallowEqual);
  const filter = useSelector(state => state.filter, shallowEqual);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    return contacts.length ? contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase())
    }) : [];
  }, [contacts, filter]);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  const elements = filteredContacts.map(({ id, name, phone }) => (
    <ContactsItem
      key={id}
      name={name}
      phone={phone}
      deleteHandler={() => dispatch(deleteContact(id))}
    />
  ));

  return <ul className={s.list}>{elements}</ul>;
};
