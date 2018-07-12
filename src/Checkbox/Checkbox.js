import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
  }
  
  getCheckbox(VehiclesArray) {
    return VehiclesArray.map((vehicle) => {
      return <div key={vehicle.name} className="checkbox">
              <label htmlFor="vehicle">{vehicle.name}</label>
              <input type="radio" name="vehicle" id={vehicle.name} value={vehicle.name} />
            </div>
    });
  }
      
  render() {
    return(
      <div className="checkbox-wrapper">
        {this.getCheckbox(this.props.VehiclesArray)}
      </div>
    );
  }    
    
}

export default Checkbox;