import React, { Component } from 'react';
import TechList from './TechList';

class Techs extends Component {
  render() {
    return this.props.DBTechnicians.map(tech =>(
       <TechList key={tech.id} tech={tech}/>
    )) ;
  }
}

export default Techs;