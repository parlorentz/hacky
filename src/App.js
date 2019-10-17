import React from 'react';
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import styled from 'styled-components';

styled.div`
    .app {
        width: 200px;
        padding-top: 25px;
    }
`;

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
    return (
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    );
  }

}

export default App;