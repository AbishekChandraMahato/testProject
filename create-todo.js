import React, { Component } from 'react';
import _ from 'lodash';



class CreateTodo extends Component {



  render() {

    return (
      <div className="formdiv">
      <form className="form-inline" onSubmit={this.handleCreate.bind(this)}>

          <input  className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" placeholder="Full Name" ref="fname"></input>
          <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" placeholder="E-mail Address" ref="email"></input>
          <input className="form-control mb-2 mr-sm-2 mb-sm-0" type="text" placeholder="Phone Number" ref="phone"></input>
          <button className="btn btn-info">Add New</button>



      </form>
      <br />
    </div>






    );
  }

  handleCreate(event){
    event.preventDefault();
    const createInput=this.refs.email;
    const email= createInput.value;

    const validateInput=this.validateInput(email);

    const createInputphone=this.refs.phone;
    const phone= createInputphone.value;

    const validateInputphone=this.validateInputphone(phone);


    const createInputfname=this.refs.fname;
    const fname= createInputfname.value;

    const validateInputfname=this.validateInputfname(fname);





    if(validateInputphone || validateInput || validateInputfname){
      this.setState({error:validateInputphone});
      this.setState({error:validateInput});
      this.setState({error:validateInputfname});

      return;
    }







    if((fname!='' && email!='' && phone!='') && ((validateInput==null) && (validateInputphone==null) &&(validateInputfname==null))){
    this.props.createTask(fname,email,phone);

    this.refs.fname.value='';
    this.refs.email.value='';
    this.refs.phone.value='';


  }







  }
  validateInput(email){



  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");



  if(email==''){
    alert('please enter email');
    return false;

  }

    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {

        alert('invalid email');
      return false;


    }

        else if (_.find(this.props.todos,todo =>todo.emailId===email)) {
          alert("The Email already exist");
          return false;


        }
        else{
          return null;
        }
      }

  validateInputphone(phone){



        var phoneno = /^\d+/;





  if(phone==''){
    alert('please enter phone Number!');return false;}



            else if(!phone.match(phoneno)) {
              alert('invalid phone number!');
              return false;

            }
            else if (_.find(this.props.todos,todo =>todo.phoneNumber===phone)) {
              alert('The phone number already exist!');
              return false;

            }
            else{
                return null;
            }
          }

          validateInputfname(fname){
            var letters = /^[a-z\s]+$/i;
              if(fname==''){
              alert('please enter Full name!');
              return false;}




              else if(!fname.trim().match(letters))
              {
                alert('Invalid name!');
                return false;
              }

                      else if (_.find(this.props.todos,todo =>todo.fullName===fname)) {
                        alert('The name already exist!');
                        return false;

                      }
                      else{
                          return null;
                      }
                    }

  }




export default CreateTodo;
