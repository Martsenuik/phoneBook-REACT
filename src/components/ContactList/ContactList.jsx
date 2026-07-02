import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { deleteContact } from "../../redux/actions";
import "./contactList.css";

export const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const filterValue = useSelector((state) => state.contacts.filter);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase()),
  );

  return (
    <>
      <section className="contactListSection">
        <h2 className="contactListTitle">Contact history</h2>
        <ul className="contactList">
          {visibleContacts &&
            visibleContacts.map(({ id, name, number }) => {
              return (
                <li className="contactItem" key={id}>
                  <p>
                    {name}: {number}
                  </p>
                  <button
                    className="btnDelete"
                    onClick={() => {
                      dispatch(deleteContact(id));
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
};
