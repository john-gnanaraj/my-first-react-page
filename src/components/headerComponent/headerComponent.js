import React, { Component } from 'react';

import {
  Link, Redirect
} from 'react-router-dom';

class headerComp extends Component {
  render() {
    return (
      <header>
        <div className="logo">Logo</div>

        <nav>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/Contacts">Contact</Link></li>
            </ul>
        </nav>

      </header>
    );
  }
}

export default headerComp;
