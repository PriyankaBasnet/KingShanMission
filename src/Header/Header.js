import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <header className="header">
        <nav>
         <a href="">Reset</a> |
         <a href="https://www.geektrust.in/">GeekTrust Home</a>
        </nav>
      </header>
    );
  }
}

export default Header;