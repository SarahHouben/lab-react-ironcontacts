import React from "react";
import contacts from "./contacts.json";

const ContactTable = props => {
  console.log("Contacts:", contacts);
  console.log("Props:", props);

  const ironContacts = contacts.map(el => {
    return (
      <tr key={el.id}>
        <td>
          {" "}
          <img src={el.pictureUrl} alt="iron img" />
        </td>
        <td>{el.name}</td>
        <td>{Math.round(el.popularity * 100) / 100}</td>
      </tr>
    );
  });

  //   console.log(ironContacts[0].name);

  return (
    <div className="contact-table">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>{ironContacts}</tbody>
      </table>
    </div>
  );
};

export default ContactTable;
