import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sugeng Rawuh Wonten React</h2>
        </div>
        <p className="App-intro">
          Nek badhe mulai, sumonggo ngedit <code>src/App.js</code> lan disimpen dinggo reload.
        </p>

        <div className="vc" ref="iScroll"style={{ height: "200px" , overflow: "auto" }}>
          <h2>Hurrah! My First React Infinite Scroll</h2>
          <ul>
              {this.displayItems()}
          </ul>
          {this.state.loadingState? <p className="loading"> loading More Items..</p>: ""}
      </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      items: 10,
      loadingState: false
    };
  }

  displayItems() {
    var items = [];
    for (var k = 0; k < this.state.items; k++) {
      items.push(<li key={k}>Item-VoidCanvas {k}</li>);
    }
    return items;
  }

  componentDidMount() {
    this.refs.iScroll.addEventListener("scroll", () => 
    {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight) 
      {
        this.loadMoreItems();
      }
    });
  }

  loadMoreItems() {
    this.setState({ loadingState: true });
    // you may call ajax instead of setTimeout
    setTimeout(() => {
        this.setState({ items: this.state.items + 10, loadingState: false });
    }, 3000);
  }

}

export default App;
