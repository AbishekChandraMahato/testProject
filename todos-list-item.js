import React, { Component } from 'react';


class TodosListItem extends Component {
  constructor(props){

    super(props);
    this.state={

      isEditing:false
    };
  }

  renderidSection()
  {
    const {idNum,isCompleted}= this.props;

    const taskStyle={
      color:isCompleted ? 'green' : 'red',
      cursor:'pointer'
    };




    }


  renderTaskSection()
  {
    const {fullName,isCompleted}= this.props;

    const taskStyle={
      color:isCompleted ? 'green' : 'red',
      cursor:'pointer'
    };
    if(this.state.isEditing){
      return(
          <td>
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" defaultValue={fullName} ref="editInput" />

            </form>


          </td>


      );
    }

    return(
      <td style ={taskStyle}  onClick={this.props.toggleTask.bind(this, fullName)}
        >{fullName} </td>

    );

  }

  renderPhoneSection()
  {
    const {phoneNumber,isCompleted}= this.props;

    const taskStyle={
      color:isCompleted ? 'green' : 'red',
      cursor:'pointer'
    };
    if(this.state.isEditing){
      return(
          <td>
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" defaultValue={phoneNumber} ref="editPhoneInput" />

            </form>


          </td>


      );
    }

    return(
      <td style ={taskStyle}  onClick={this.props.togglePhone.bind(this, phoneNumber)}
        >{phoneNumber} </td>

    );

  }

  renderEmailSection()
  {
    const {emailId,isCompleted}= this.props;

    const taskStyle={
      color:isCompleted ? 'green' : 'red',
      cursor:'pointer'
    };
    if(this.state.isEditing){
      return(
          <td>
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" defaultValue={emailId} ref="editEmailInput" />

            </form>


          </td>


      );
    }

    return(
      <td style ={taskStyle}  onClick={this.props.toggleEmail.bind(this, emailId)}
        >{emailId} </td>

    );

  }


  renderActionsSection(){
      if(this.state.isEditing){
        return(
          <td>
          <button className="btn btn-success"onClick={this.onSaveClick.bind(this)}>Save</button>
          <button className="btn btn-secondary" onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>




        );
      }
      return(
        <td>




        <button className="btn btn-warning" onClick={this.onEditClick.bind(this)}>
          Edit
          </button>
        <button className="btn btn-danger" onClick={this.props.deleteTask.bind(this, this.props.fullName)}>Delete</button>
        </td>
      );

  }

  render() {
    return (

        <tr>
            {this.renderidSection()}
            {this.renderTaskSection()}
            {this.renderEmailSection()}
            {this.renderPhoneSection()}


            {this.renderActionsSection()}


        </tr>

    );
  }
  onEditClick(){
    this.setState({isEditing:true});
  }

  onCancelClick(){
    this.setState({isEditing:false});
  }
  onSaveClick(event){
    event.preventDefault();
    const oldName= this.props.fullName;
    const newName=this.refs.editInput.value;
    this.props.saveTask(oldName,newName);

    const oldEmail= this.props.emailId;
    const newEmail=this.refs.editEmailInput.value;

    this.props.saveEmail(oldEmail,newEmail);

    const oldPhone= this.props.phoneNumber;
    const newPhone=this.refs.editPhoneInput.value;

    this.props.savePhone(oldPhone,newPhone);
    this.setState({isEditing:false});


  }


}

export default TodosListItem;
