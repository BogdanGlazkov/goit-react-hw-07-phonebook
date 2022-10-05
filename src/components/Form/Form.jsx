import { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/contacts.slice';
import s from './Form.module.css';
import {Button} from 'components/Button';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts, shallowEqual);
  const dispatch = useDispatch();

  const onInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        throw new Error('Not valid value');
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const newContact = { id: nanoid(), name, number };
    
    if (contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    };
    dispatch(addContact(newContact));
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <label className={s.label}>
        Name
        <input
          onChange={onInputChange}
          value={name}
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          onChange={onInputChange}
          value={number}
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit" sbtm>Add contact</Button>
    </form>
  );
};
