import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";
import "./contactForm.css";

export const ContactForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact(nameValue, numberValue));
  };
  return (
    <>
      <section className="contactFormSection">
        <h2 className="title">Contact adding</h2>
        <form onSubmit={handleSubmit} className="contactForm">
          <label>
            Name
            <input
              className="input"
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </label>
          <label>
            Number
            <input
              className="input"
              type="number"
              value={numberValue}
              onChange={(e) => setNumberValue(e.target.value)}
            />
          </label>
          <button className="btnAdd" type="submit">
            Add Contact
          </button>
        </form>
      </section>
    </>
  );
};
