import React from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  state = {
    width: window.innerWidth,
    users: [],
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
		this.loadUsers(50);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  // Method for querying data
  loadUsers = (number_of_users) => {
		$.ajax(`https://randomuser.me/api/?results=${number_of_users}`, {
			success: data => {
        if (this.state.users.length > 0) {
          data = this.state.users.concat(data);
        }
        this.setState({users: data['results']})
			},
		});
  }
  
  renderTableData() {
    /* const width = this.state.width;
    const isMobile = width <= 500;
    const isTablet = width >= 501 && width <= 1000;
    const isDesktop = width >= 1001; */
    return this.state.users.map((user, _index) => {
      if (!user.id.value) {
        return;
      }
      return (
        <tr key={user.id.value}>
          <td>
            <div>
              <div>
                <img src={user.picture.thumbnail}/>
                <br></br>{'gender: ' + user.gender}
                <br></br>{
                  'name: ' + 
                  user.name.title + ' ' + 
                  user.name.first + ' ' + 
                  user.name.last
                }
                <br></br>{'e-mail: ' + user.email}
              </div>
            </div>
          </td>
        </tr>
      )
    })
  }

  render() {
    var app = (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 id='title'>Secret Profiles</h1>
        <table id='users'>
          <tbody>
            { this.renderTableData() }
          </tbody>
        </table>
      </div>
    );
    return app;
  }
}

export default App;