import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contactDelete, contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contactDelete={contactDelete}
          contacts={contact}
        />
      ))}
    </ul>
  );
}
