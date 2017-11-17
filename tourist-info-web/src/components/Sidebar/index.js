import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Sidebar extends Component {
  render() {
    return (
      <div className="navbar-default sidebar hidden-sm" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            {this.props.menuItems.map((item, index)=>{
              let LinkComponent = item.link === '/' ? IndexLink : Link;
              return (
                <li key={item.link}><LinkComponent to={item.link}>
                  <i className={`fa ${item.icon} fa-fw`} /> &nbsp;{item.text}
                </LinkComponent></li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
