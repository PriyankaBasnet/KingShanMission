import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

      
  render() {
    return(
      <footer className="footer">
       <span>coding problem - </span>
       <a href="https://www.geektrust.in/finding-falcone" target="_blank">www.geektrust.in/finding-falcone</a>
      </footer>
    );
  }    
    
}

export default Footer;