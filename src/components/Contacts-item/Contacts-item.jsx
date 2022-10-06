import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'components/Button';
import s from './Contacts-item.module.css';

export const ContactsItem = ({ name, phone, deleteHandler }) => {
  const onItemHover = e => {
    e.currentTarget.classList.toggle(s.focus);
  };

  return (
    <li
      onMouseOut={onItemHover}
      onMouseOver={onItemHover}
      className={s.item}
    >
      <span className={s.name}>{name}:</span>
      <span className={s.num}>{phone}</span>
      <Button dlt type="button" onClickHandler={deleteHandler}>
        Delete
      </Button>
    </li>
  );
}

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
