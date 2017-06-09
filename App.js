import React, { Component } from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import _ from 'lodash';

const todos=[
  {

    fullName: 'Abishek',
    emailId:'abi@gmail.com',
    phoneNumber:'12345678',
    isCompleted:true
  },{

    fullName: 'Bishal',
    emailId:'bi@gmail.com',
    phoneNumber:'46654363',
    isCompleted:true
  },{

    fullName: 'Shankar',
    emailId:'sh@gmail.com',
    phoneNumber:'123456',
    isCompleted:true
  },{

    fullName: 'Antti',
    emailId:'ant@gmail.com',
    phoneNumber:'123354456',
    isCompleted:true
  },{

    fullName: 'Mikko',
    emailId:'Mi@gmail.com',
    phoneNumber:'12343556',
    isCompleted:true
  },{

    fullName: 'Sippo',
    emailId:'si@gmail.com',
    phoneNumber:'123455466',
    isCompleted:true
  },{

    fullName: 'Sarri',
    emailId:'sa@hotmail.com',
    phoneNumber:'12346556',
    isCompleted:true
  },{

    fullName: 'Mohammed',
    emailId:'mo@gmail.com',
    phoneNumber:'123456456',
    isCompleted:true
  },{

    fullName: 'Ayesha Abdullah',
    emailId:'Ayesha@gmail.com',
    phoneNumber:'125643456',
    isCompleted:true
  },{

    fullName: 'David Johnson',
    emailId:'Dj@gmail.com',
    phoneNumber:'12356456456',
    isCompleted:true
  },{

    fullName: 'Yadav Bhattarai',
    emailId:'yb@gmail.com',
    phoneNumber:'4623456',
    isCompleted:true
  },{

    fullName: 'Mukta Jahangiri',
    emailId:'mj@gmail.com',
    phoneNumber:'1235466456',
    isCompleted:true
  },{

    fullName: 'Mian Tiang',
    emailId:'mt@gmail.com',
    phoneNumber:'156423456',
    isCompleted:true
  },{

    fullName: 'Quang chinu',
    emailId:'qc@gmail.com',
    phoneNumber:'8923456',
    isCompleted:true
  },{

    fullName: 'Vladimir Putin',
    emailId:'Vd@gmail.com',
    phoneNumber:'64623456',
    isCompleted:true
  },{

    fullName: 'Shasha Tebrosky',
    emailId:'st@gmail.com',
    phoneNumber:'845683456',
    isCompleted:true
  },{

    fullName: 'Amarendra Bahubali',
    emailId:'ab@gmail.com',
    phoneNumber:'12354456',
    isCompleted:true
  },{

    fullName: 'Bhallal Deva',
    emailId:'bd@gmail.com',
    phoneNumber:'65423456',
    isCompleted:true
  },
  {

    fullName: 'Sunita Williams',
    emailId:'sw@gmail.com',
    phoneNumber:'87485641',
    isCompleted:true
  },
  {

    fullName: 'Abishek Chandra Mahato',
    emailId:'acm@gmail.com',
    phoneNumber:'98471556',
    isCompleted: true
  }


];
class App extends Component {
  constructor(props)
  {
    super(props);

    this.state={
      todos

    };

  }

  render() {
    return (
      <div>
          <h1>Nord Software</h1><br/><br/><br/><br/>
          <h3>List of Participants</h3><br/>






          <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
          <TodosList todos={this.state.todos}
                  saveTask={this.saveTask.bind(this)}
                  toggleTask={this.toggleTask.bind(this)}
                  saveEmail={this.saveEmail.bind(this)}
                  toggleEmail={this.toggleEmail.bind(this)}

                  savePhone={this.savePhone.bind(this)}
                  togglePhone={this.togglePhone.bind(this)}
                  deleteTask={this.deleteTask.bind(this)}


          />



      </div>
    );
  }

  deleteTask(nameToDelete){

    _.remove(this.state.todos,todo=>todo.fullName==nameToDelete);
    this.setState({todos: this.state.todos});


  }


saveTask(oldName,newName){
  const foundTodo=  _.find(this.state.todos, todo =>todo.fullName===oldName);
  foundTodo.fullName=newName;
  this.setState({todos: this.state.todos});


}

savePhone(oldPhone,newPhone){
  const foundTodo=  _.find(this.state.todos, todo =>todo.phoneNumber===oldPhone);
  foundTodo.phoneNumber=newPhone;
  this.setState({todos: this.state.todos});


}

saveEmail(oldEmail,newEmail){
  const foundTodo=  _.find(this.state.todos, todo =>todo.emailId===oldEmail);
  foundTodo.emailId=newEmail;
  this.setState({todos: this.state.todos});


}

toggleTask(fullName){
  const foundTodo = _.find(this.state.todos,todo=> todo.fullName===fullName);
  foundTodo.isCompleted=!foundTodo.isCompleted;
  this.setState({todos:this.state.todos});

}

toggleEmail(emailId){
  const foundTodo = _.find(this.state.todos,todo=> todo.emailId===emailId);
  foundTodo.isCompleted=!foundTodo.isCompleted;
  this.setState({todos:this.state.todos});

}

togglePhone(phoneNumber){
  const foundTodo = _.find(this.state.todos,todo=> todo.phoneNumber===phoneNumber);
  foundTodo.isCompleted=!foundTodo.isCompleted;
  this.setState({todos:this.state.todos});

}

  createTask(fname,email,phone){


    this.state.todos.push({

      fullName:fname,
      emailId:email,
      phoneNumber:phone,
      isCompleted:false
  });

    this.setState({todos:this.state.todos});



  }




}

export default App;
