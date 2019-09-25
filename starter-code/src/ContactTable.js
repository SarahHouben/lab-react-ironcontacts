import React from "react";
import contacts from "./contacts.json";
import RandomButton from "./RandomButton";

class ContactTable extends React.Component {
  //SET INITIAL STATE
  state = {
    slicedContacts: contacts.slice(0, 5)
  };

  //   FUNCTIONALITY OF GENERATE-RANDOM BUTTON
  generateRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    //Update state
    this.setState({
      //   slicedContacts: this.state.slicedContacts.concat(randomContact)
      //   Alternative:
      slicedContacts: [...this.state.slicedContacts, randomContact]
    });
  };

  //   //FUNCTIONALITY OF FILTER-BY-NAME-BUTTON
  //   filterName = () => {
  //     let nameSorted = [...this.state.slicedContacts].sort((a, b) =>
  //       a.name.localeCompare(b.name)
  //     );
  //     this.setState({
  //       slicedContacts: nameSorted
  //     });
  //   };
  // Same as above
  filterName = () => {
    let nameSorted = [...this.state.slicedContacts];
    nameSorted.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      slicedContacts: nameSorted
    });
  };

  //FUNCTIONALITY OF FILTER-BY-POPULARITY-BUTTON
  filterPopularity = () => {
    let popularitySorted = [...this.state.slicedContacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({
      slicedContacts: popularitySorted
    });
  };

  //FUNCTIONALITY OF DELETE-BUTTON

  deleteContact = id => {
    //remove an element from this.state.contacts using setState
    // console.log(id);
    const filtered = this.state.slicedContacts.filter(el => {
      return el.id !== id;
    });

    this.setState({
      slicedContacts: filtered
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
          <td>
            <button onClick={() => this.deleteContact(el.id)}>Delete</button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <div className="contact-table">
          <div className="button-div">
            <RandomButton randomClick={this.generateRandomContact} />
            <button onClick={this.filterName}>Sort by Name</button>
            <button onClick={this.filterPopularity}>Sort by Popularity</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
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
