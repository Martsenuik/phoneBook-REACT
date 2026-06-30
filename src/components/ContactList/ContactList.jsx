import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { deleteContact } from "../../redux/actions";
import "./contactList.css";

export const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <>
      <section className="contactListSection">
        <h2 className="contactListTitle">Contact history</h2>
        <ul className="contactList">
          {contacts &&
            contacts.map(({ id, name, number }) => {
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
