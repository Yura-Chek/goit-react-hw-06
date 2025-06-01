import css from "./Contact.module.css";
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contacts, contactDelete }) {
  return (
    <li className={css.item}>
      <span className={css.span}>
        <IoIosContact />
        {contacts.name}
      </span>
      <span>
        <FaPhoneAlt />
        {contacts.number}
      </span>
      <button
        className={css.deletebtn}
        onClick={() => contactDelete(contacts.id)}
      >
        Delete
      </button>
    </li>
  );
}
