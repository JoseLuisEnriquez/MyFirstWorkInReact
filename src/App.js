import React, { Component } from 'react';
import DBTechnicians from './data/MOCK_DATA_TECHNICIANS.json';
import Header from './components/layout/header';
import Tech from './components/Tech';
import './App.css';
import AddTech from './components/AddTech';

class App extends Component {
  state = {
    DBTechnicians,
    isEditing: false,
    technicianToEdit: {},
  }

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

  editTech = (tech) => {
    this.setState({
      DBTechnicians: this.state.DBTechnicians.map(element => {
        if(element.id === tech.id) {
          element.id = tech.id
          element.firstName = tech.firstName
          element.lastName = tech.lastName
          element.email = tech.email
          element.boilersTypeId = tech.boilersTypeId
          element.professionalLevel = tech.professionalLevel
          element.hourRate = tech.hourRate
          element.monthlyCapacity = tech.monthlyCapacity
        }
      return element;
      }),
      technicianToEdit: {},
      isEditing: false
    })
  };

  deleteTech = (id) => {
    this.setState({DBTechnicians: [...this.state.DBTechnicians.filter(tech => tech.id !== id)]})
  }

  handleEdit = (technician) => {
    this.setState({
      isEditing: !this.state.isEditing,
      technicianToEdit: technician,
    })
  }

  render(){
    return(
      <div className='App'>
        <Header />
          <AddTech
            AddTech = {this.AddTech}
            editTech = {this.editTech}
            isEditing = {this.state.isEditing}
            technicianToEdit = {this.state.technicianToEdit}
          />
          <Tech
            DBTechnicians = {this.state.DBTechnicians}
            deleteTech = {this.deleteTech}
            handleEdit = {this.handleEdit}
          />
      </div>
    );
  }
}

export default App;
