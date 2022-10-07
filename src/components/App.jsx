import { useSelector, shallowEqual } from "react-redux";
import { ThreeDots } from 'react-loader-spinner';
import { ContactsList } from "./Contacts-list/Contacts-list";
import { Form } from "./Form";
import { Filter } from "./Filter";
import { Section } from './Section';
import s from './Section/Section.module.css';

export const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading, shallowEqual);

  return (
    <div>
      <h1>Phonebook</h1>
      <Section>
        <Form />
      </Section>
      <Section>
        <h2>Contacts</h2>
        {isLoading && <ThreeDots wrapperClassName={s.loader} width="100" /> }
            <Filter />
            <ContactsList />
      </Section>
    </div>
  );
};
