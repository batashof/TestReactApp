import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }


  componentDidMount() {
    let IDs = [2, 7, 1, 8, 3, 9];
    for (let i = 0; i < IDs.length; i++) {
      fetch(`https://picurl.herokuapp.com/users/${IDs[i]}`)
          .then(response => response.json())
          .then(data => this.setState({
            users: [...this.state.users, data.url]
          }));
    }
  }


  render() {
    return (
        <div className="App">
          {this.state.users.map(user => (
              <div>
                <img className="Img" src={user} alt="img"/>
              </div>
          ))}
        </div>
    )
  }
}

export default App;
