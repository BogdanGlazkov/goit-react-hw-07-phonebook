import { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addContact } from 'redux/operations';
import {Button} from 'components/Button';
import s from './Form.module.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items, shallowEqual);
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
        console.log(e.target.value + "is not a valid value");
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const newContact = { name, number };
    
    if (contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    };
    dispatch(addContact(newContact));
    formReset();
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
          placeholder="Jackie Chan"
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
          placeholder="123-456-7890"
          required
        />
      </label>
      <Button type="submit" sbtm>Add contact</Button>
    </form>
  );
};
