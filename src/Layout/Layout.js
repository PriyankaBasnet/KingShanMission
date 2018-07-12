import React from 'react';
import requestMethod from '../javascript/utils';
import Dropdown from '../Dropdown/Dropdown';
import Checkbox from '../Checkbox/Checkbox';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      planetsArray:[],
      VehiclesArray:[],
      selectPlanets: 4
    }
    
    this.getPlanetsData = this.getPlanetsData.bind(this);
    this.getDropdownComponent = this.getDropdownComponent.bind(this);
  }
  
  componentDidMount() {
    this.getPlanetsData();
    this.getVehiclesData();
  }
  
  getPlanetsData() {
    console.log('hello',priyanka);
    let priyanka = 'hfdjfh';
    var fetchPlanets = requestMethod("GET", "https://findfalcone.herokuapp.com/planets");
    fetchPlanets.then((response) => { 
     this.setState({planetsArray: JSON.parse(response)});
    });
   }
   
   getVehiclesData() {
     var fetchPlanets = requestMethod("GET", "https://findfalcone.herokuapp.com/vehicles");
     fetchPlanets.then((response) => { 
      this.setState({VehiclesArray: JSON.parse(response)});
     });
   }
   
   layoutGenerator() {
     let layout = [];
     for(var i=0; i < this.state.selectPlanets; i++) {
      layout.push(<div className="select-planet">
                    {this.getDropdownComponent(this.state.planetsArray)}
                    <Checkbox VehiclesArray={this.state.VehiclesArray} />
                    </div>);
      }
        
      return layout;
   }
      
   getDropdownComponent(planetsArray) {
     let dropdown = [];
        dropdown.push(<Dropdown planets={planetsArray} />);
     return dropdown;
   }
  
  render() {
    return(
      <div className="select-planet-container">
        { this.layoutGenerator() }
      </div>
    );
  }
}

export default Layout;