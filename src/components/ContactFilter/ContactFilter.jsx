import "./contactFilter.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const ContactFilter = () => {
  const [filterValue, setFilterValue] = useState("");
  const dispatch = useDispatch();
  return (
    <section className="contactFilterSection">
      <h2 className="title">Contact Search</h2>
      <input
        value={filterValue}
        onChange={(e) => {
          const value = e.target.value;
          setFilterValue(value);
          dispatch({ type: "contacts/filterContact", payload: value });
        }}
        className="inputSearch"
        type="text"
        placeholder="Search..."
      />
    </section>
  );
};
