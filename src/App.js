import React, { Component } from 'react';
import DBTechnicians from './data/MOCK_DATA_TECHNICIANS.json';
import Header from './components/layout/header';
import Tech from './components/Tech';
import './App.css';
import AddTech from './components/AddTech';

class App extends Component {
  state = {DBTechnicians}

  AddTech = ({id, firstName, lastName, email, boilersTypeId, professionalLevel, hourRate, monthlyCapacity}) =>{
    const newTech = {
      id,
      firstName,
      lastName,
      email,
      boilersTypeId,
      professionalLevel,
      hourRate,
      monthlyCapacity
    }
    this.setState({ DBTechnicians: [...this.state.DBTechnicians, newTech]})
  }
  render(){
    return(
      <div className='App'>
        <Header />
        <Tech DBTechnicians={this.state.DBTechnicians}  />
        <AddTech AddTech={this.AddTech} />
      </div>
    );
  }
}

export default App;
