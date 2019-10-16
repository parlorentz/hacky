import React from 'react';
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import './App.css';

class App extends React.Component {
  
  state = {
    width: window.innerWidth,
    users: [],
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    console.log("users", this.state.users);
    return (
      <div className="App">
        <div className="app">
          <Sidebar />
          <Content />
        </div>
      </div>
    );
  }

}

export default App;