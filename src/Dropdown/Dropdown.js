import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  
  createOptionElement(planets) {
    var option = [];
    for(var i=0; i < planets.length; i++) {
      option.push(<option value={planets[i].name}>{planets[i].name}</option>);
    }
    return option;
  }
  
  
  render() {
    return(
      <select className="dropdown-conatiner">
       <option>select</option>
       {this.createOptionElement(this.props.planets)}   
      </select>
    );
  }
}

export default Dropdown;