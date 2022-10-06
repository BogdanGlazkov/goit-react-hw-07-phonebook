import { useSelector, shallowEqual } from "react-redux";
import { ContactsList } from "./Contacts-list/Contacts-list";
import { Form } from "./Form";
import { Filter } from "./Filter";
import { Section } from './Section';
import { ThreeDots } from 'react-loader-spinner';

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
        {isLoading && <ThreeDots wrapperClass="loader" color="black" width="100" /> }
            <Filter />
            <ContactsList />
      </Section>
    </div>
  );
};
