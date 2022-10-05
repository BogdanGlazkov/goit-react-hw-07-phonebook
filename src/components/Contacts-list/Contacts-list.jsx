import { useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.slice';
import {ContactsItem} from 'components/Contacts-item';
import s from './Contacts-list.module.css';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts, shallowEqual);
  const filter = useSelector(state => state.filter, shallowEqual);
  const dispatch = useDispatch();

  const filteredContacts = useMemo(() => {
    return contacts.length ? contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase())
    }) : [];
  }, [contacts, filter]);

  const elements = filteredContacts.map(({ id, name, number }) => (
    <ContactsItem
      key={id}
      name={name}
      number={number}
      deleteHandler={() => dispatch(deleteContact(id))}
    />
  ));

  return <ul className={s.list}>{elements}</ul>;
};
