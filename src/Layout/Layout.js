import React from 'react';
import requestMethod from '../javascript/utils';
import Dropdown from '../Dropdown/Dropdown';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      planetsArray:[],
      selectPlanets: 4
    }
    
    this.getPlanetsData = this.getPlanetsData.bind(this);
    this.getDropdownComponent = this.getDropdownComponent.bind(this);
  }
  
  componentDidMount() {
    this.getPlanetsData();
  }
  
  getPlanetsData() {
    var fetchPlanets = requestMethod("GET", "https://findfalcone.herokuapp.com/planets");
    fetchPlanets.then((response) => { 
     this.setState({planetsArray: JSON.parse(response)});
    });
   }
   
   
   getDropdownComponent(planetsArray) {
     let dropdown = [];
     for(var i = 0; i < this.state.selectPlanets; i++) {
        dropdown.push(<Dropdown planets={planetsArray} />);
     }
     return dropdown;
   }
  
  render() {
    return(
      <div className="layout-conatiner">
        {this.getDropdownComponent(this.state.planetsArray)}
        <div className="">
        </div>
      </div>
    );
  }
}

export default Layout;