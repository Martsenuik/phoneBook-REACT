import { useState } from "react";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { ContactFilter } from "./components/ContactFilter/ContactFilter";

function App() {
  return (
    <>
      <section>
        <h1>Phone Book</h1>
        <ContactForm />
        <ContactFilter />
        <ContactList />
      </section>
    </>
  );
}

export default App;
