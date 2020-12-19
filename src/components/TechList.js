import React, { Component } from 'react';

export class TechList extends Component {
    render() {
      return (
        <div className="box">
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Boiler Type Id</th>
              <th>Profesional Level</th>
              <th>Hour Rate</th>
              <th>Monthly Capacity</th>
              <th>Remove</th>
            </tr>
            <tr>
              <td className="id">{this.props.tech.id}</td>
              <td>
                {this.props.tech.firstName}
                {this.props.tech.lastName}
              </td>
              <td>{this.props.tech.email}</td>
              <td>{this.props.tech.boilersTypeId}</td>
              <td>{this.props.tech.professionalLevel}</td>
              <td>{this.props.tech.hourRate}</td>
              <td>{this.props.tech.monthlyCapacity}</td>
              <td>
                <button
                  onClick={() => this.props.deleteTech(this.props.id)}
                  className="X"
                >
                  X
                </button>
                <button
                  onClick={() => this.props.handleEdit(this.props.tech)}
                >
                  Edit
                </button>
              </td>
            </tr>
          </table>
        </div>
      );
    }
  }

export default TechList