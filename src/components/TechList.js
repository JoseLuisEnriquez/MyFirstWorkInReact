import React, { Component } from 'react'

export class TechList extends Component {
    render() {
        const {id} = this.props.tech;
        return (
            <div className='box'>
            <ul>
                <li className='id'>{ this.props.tech.id }</li>
                <li>{ this.props.tech.firstName}</li>
                <li>{ this.props.tech.lastName}</li>
                <li>{ this.props.tech.email}</li>
                <li>{ this.props.tech.boilersTypeId}</li>
                <li>{ this.props.tech.professionalLevel}</li>
                <li>{ this.props.tech.hourRate}</li>
                <li>{ this.props.tech.monthlyCapacity}</li>
                <button onClick={this.props.deleteTech.bind(this, id)} className='X'>X</button>
            </ul>
            </div>
        )
    }
}
export default TechList