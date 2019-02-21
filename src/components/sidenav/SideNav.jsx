import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import './SideNav.css';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: [],
            activeMediaIndex: 0
        };
    }
    componentDidMount() {
        //setInterval(this.changeActiveMedia.bind(this), 5000);
    }
    // changeActiveMedia() {
    //     const { text } = this.state;
    //     this.setState({ text: text.concat(this.state.activeMediaIndex++) });
    //     this.refs.scrollbars.scrollToBottom();
    // }
    render() {
        const { routes, ...rest } = this.props;
        var listItems = (
            <ul className='side-menu-list'>
                {routes.map(props => {
                    if (props.redirect) return null;
                    if (props.showSidebar == false) return null;
                    return (
                        <li key={props.sidebarName} color='grey'>
                            <Link to={props.path}>
                                {' '}
                                <i className={props.className} />
                                <span className='lbl'>{props.sidebarName}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
        return (
            <div>
                <nav className='side-menu'>
                    {listItems}
                    <Scrollbars ref='scrollbars' style={{ height: '200px' }}>
                        <div className='card' style={{ margin: '0' }}>
                            <ul className='list-group list-group-flush'>
                                {this.state.text.map(x => (
                                    <li className='list-group-item'>
                                        <i
                                            className='fa fa-bell'
                                            aria-hidden='true'
                                        />
                                        Event {x}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Scrollbars>
                </nav>
            </div>
        );
    }
}

export default SideNav;
