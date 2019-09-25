import React from "react";
import contacts from "./contacts.json";
import RandomButton from "./RandomButton";

class ContactTable extends React.Component {
  state = {
    slicedContacts: contacts.slice(0, 5)
  };

  //FUNCTIONALITY OF GENERATERANDOM BUTTON
  generateRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomContact);

    this.setState({
      slicedContacts: this.state.slicedContacts.concat(randomContact)
    });
  };

  render() {
    const ironContacts = this.state.slicedContacts.map(el => {
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
    return (
      <div>
        <div className="contact-table">
          <RandomButton randomClick={this.generateRandomContact} />
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
      </div>
    );
  }
}

export default ContactTable;
