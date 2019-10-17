import React from 'react'
import $ from "jquery";
import logo from '../revelation.png';

export default class Content extends React.Component {

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

    renderTable() {
        const width = this.state.width;
        // Mobile
        if (width <= 500) {
            const rows = Math.ceil(this.state.users.length / 1);
            return this.renderTableMobile(rows,[]);
        }
        // Tablet
        if (width >= 501 && width <= 1000) {
            const rows = Math.ceil(this.state.users.length / 2);
            return this.renderTableTablet(rows,[]);
        }
        // Desktop
        if (width >= 1001) {
            const rows = Math.ceil(this.state.users.length / 4);
            return this.renderTableDesktop(rows,[]);
        }
    }

    renderTableMobile(rows, table) {
        for (var i = 0; i < rows; i++) {
            table.push(
                <tr key={i}>
                    { this.state.users[i] && this.renderTableCell(this.state.users[i]) }
                </tr>
            )
        }
        return table;
    }

    renderTableTablet(rows, table) {
        for (var i = 0; i < rows; i++) {
            table.push(
                <tr key={i}>
                    { this.state.users[i*4+0] && this.renderTableCell(this.state.users[i*4+0]) }
                    { this.state.users[i*4+1] && this.renderTableCell(this.state.users[i*4+1]) }
                </tr>
            )
        }
        return table;
    }

    renderTableDesktop(rows, table) {
        for (var i = 0; i < rows; i++) {
            table.push(
                <tr key={i}>
                    { this.state.users[i*4+0] && this.renderTableCell(this.state.users[i*4+0]) }
                    { this.state.users[i*4+1] && this.renderTableCell(this.state.users[i*4+1]) }
                    { this.state.users[i*4+2] && this.renderTableCell(this.state.users[i*4+2]) }
                    { this.state.users[i*4+3] && this.renderTableCell(this.state.users[i*4+3]) }
                </tr>
            )
        }
        return table;
    }

    renderTableCell(user) {
        return (
            <td style={{padding:'10px', border:'1px solid #000000'}}>
                <img src={user.picture.large} alt="portrait"/>
                <br></br>{'gender: ' + user.gender}
                <br></br>{'name: ' +
            user.name.title + ' ' +
            user.name.first + ' ' +
            user.name.last}
                <br></br>{'Date of birth: ' + user.dob.date.substr(0, 10)}
                <br></br>{'e-mail: ' + user.email}
            </td>
        )
    }

    render() {
        return <div className="content-container">
            I'm the content!
            <header className="App-header">
                <img src={logo} className="App-logo" alt="revelation"/>
            </header>
            <h1 id='title'>Secret Profiles</h1>
            <table id='users' width={this.state.width} style={{textAlign:'center'}}>
                <tbody>
                { this.renderTable() }
                </tbody>
            </table>
        </div>
    }

}