import React, { Component } from 'react';

export class AddTech extends Component {
    state = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        boilersTypeId: '',
        professionalLevel: '',
        hourRate: '',
        monthlyCapacity: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTech(this.state);
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            boilersTypeId: '',
            professionalLevel: '',
            hourRate: '',
            monthlyCapacity: ''
        });
    }
    onChange = (e) => this.setState({[e.target.name]:e.target.value});
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <h2>Add new Technician</h2>
                <input
                    type = 'text'
                    name = 'id'
                    style = {{flex: '10', padding: '5px'}}
                    placeholder = 'id'
                    value = {this.state.id}
                    onChange = {this.onChange}
                />
                <input
                    type = 'text'
                    name = 'firstName'
                    style = {{flex: '10', padding: '5px'}}
                    placeholder = 'First Name'
                    value = {this.state.firstName}
                    onChange = {this.onChange}
                />
                <input
                    type = 'text'
                    name = 'lastName'
                    style = {{flex: '10', padding: '5px'}}
                    placeholder = 'Last Name'
                    value = {this.state.lastName}
                    onChange = {this.onChange}
                />
                <input
                    type = 'email'
                    name = 'email'
                    style = {{flex: '10', padding: '5px'}}
                    placeholder = 'email'
                    value = {this.state.email}
                    onChange = {this.onChange}
                />
                <input
                    type = 'text'
                    name = 'boilersTypeId'
                    style = {{flex: '10', padding: '5px'}}
                    placeholder = 'Boilers Type Id'
                    value = {this.state.boilersTypeId}
                    onChange = {this.onChange}
                />
                <input
                    type = 'text'
                    name = 'professionalLevel'
                    style = {{flex: '10', padding: '5px'}}
                    placeholder = 'Professional Level'
                    value = {this.state.professionalLevel}
                    onChange = {this.onChange}
                />
                <input
                    type = 'text'
                    name = 'hourRate'
                    style = {{flex: '10', padding: '5px'}}
                    placeholder = 'Hour Rate'
                    value = {this.state.hourRate}
                    onChange = {this.onChange}
                />
                <input
                    type = 'text'
                    name = 'monthlyCapacity'
                    style = {{flex: '10', padding: '5px'}}
                    placeholder = 'Monthly Capacity'
                    value = {this.state.monthlyCapacity}
                    onChange = {this.onChange}
                />
                <input
                type="submit"
                value="SUBMIT"
                className='btn-submit'
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTech