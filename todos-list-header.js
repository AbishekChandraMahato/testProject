import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class TodosListHeader extends Component {
  render() {
    return (

        <thead>
          <tr>




              <th>Name</th>
              <th>Email address</th>
              <th>Phone number</th>
              <th>Action</th>








          </tr>
          </thead>

    );
  }


}

export default TodosListHeader;
