import React, { Component } from 'react';
import TechList from './TechList';

class Techs extends Component {
  render() {
    return this.props.DBTechnicians.map(tech =>(
       <TechList
        key={tech.id}
        tech={tech}
        deleteTech = {this.props.deleteTech}
        handleEdit = {this.props.handleEdit}
       />
    )) ;
  }
}

export default Techs;