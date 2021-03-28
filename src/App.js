import React, { Component } from "react";

import { CardFilter } from "./components/card-filter/card-filter.component";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filterValue: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      })
      .catch((error) => console.log(error));
  }

  handleChange = (e) => {
    this.setState({ filterValue: e.target.value });
  }

  render() {
    const { monsters, filterValue } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monster Roldex </h1>
        <CardFilter
          placeholder="Search Monster"
          handleOnChange={ this.handleChange }
        />

        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
