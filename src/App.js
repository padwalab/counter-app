import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
    <React.Fragment>
      <NavBar key="nav" totalCounters={this.state.counters.filter(c => c.value !==0 ).length}/>
      <main key="main" className="container">
        <Counters 
        counters={this.state.counters}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
        />
      </main>
    </React.Fragment>
  );
  } 
}

export default App;
