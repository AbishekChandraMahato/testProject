import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import _ from 'lodash';
import TodosListItem from './todos-list-item';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class TodosList extends Component {
  renderItems(){
    const props=_.omit(this.props,'todos');

    return _.map(this.props.todos,(todo, index)=> <TodosListItem key={index} {...todo} {...props}/>);


  }
  render() {

    return (
      <div>
      <table className="table table-hover">
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>

      </table>


</div>
    );
  }


}

export default TodosList;
