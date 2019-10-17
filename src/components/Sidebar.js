import React from 'react'
import styled from 'styled-components';

styled.div`
    .sidebars {
        width: 200px;
        padding-top: 25px;
    }
`;

export default class Sidebar extends React.Component {

    renderSidebar = () => {
        return <div className="sidebars">
            <div className="sidebar-link">Home</div>
            <div className="sidebar-link">About</div>
            <div className="sidebar-link">Contact</div>
        </div>
    };

    render() {
        return (
            <div className="sidebar-container">
                {this.renderSidebar()}
            </div>
        );
    }

}