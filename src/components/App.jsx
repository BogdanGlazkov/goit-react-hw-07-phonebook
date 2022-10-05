import { useSelector, shallowEqual } from "react-redux";
import { ContactsList } from "./Contacts-list/Contacts-list";
import { Form } from "./Form";
import { Filter } from "./Filter";
import { Section } from './Section';

export const App = () => {
  const contacts = useSelector(state => state.contacts, shallowEqual);

  return (
    <div>
      <h1>Phonebook</h1>
      <Section>
        <Form />
      </Section>
      <Section>
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <p>There are no contacts here. You can add a new one above.</p>
        )}
      </Section>
    </div>
  );
};
