/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import timezones from '../../data/timezones'
import map from 'lodash/map';
import classnames from 'classnames';
/*import TextFieldGruop from '../common/TextFieldGroup'
import {browserHistory} from 'react-router';
import validateInput from '../../../server/shared/validations/signup';
*/
/*class SignupForm extends React.Component {
  isValid(){
    const {errors,isValid} = validateInput(this.state);

    if(!isValid){
      this.setState({errors});
    }

    return isValid;
  }
  onSubmit(e){
    e.preventDefault();

    if(this.isValid()){
      this.setState({errors:{},isLoading:true});
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type:'success',
            text:'dddddddd'
          });
          browserHistory.push('/');
        },
        (data) => {this.setState({errors:data.response.data,isLoading:false })}
      )
    }
  }
  render(){
    
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1>Hello</h1>
        <TextFieldGruop
          error={errors.username}
          label="Username"
          onChange={this.onChange.bind(this)}
          type="text"
          value={this.state.username}
          field="username"
        />

        <TextFieldGruop
          error={errors.password}
          label="Password"
          onChange={this.onChange.bind(this)}
          type="text"
          value={this.state.password}
          field="password"
        />

        <TextFieldGruop
          error={errors.passwordConfirmation}
          label="passwordConfirmation"
          onChange={this.onChange.bind(this)}
          type="text"
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
        />

        <TextFieldGruop
          error={errors.email}
          label="email"
          onChange={this.onChange.bind(this)}
          type="text"
          value={this.state.email}
          field="email"
        />

        <div className="form-gruop" >
          <label className="control-label">timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange.bind(this)}
            name="timezone"
            className="form-control"
          >
            <option value="" disabled>-----</option>
            {options}
          </select>
        </div>

        <div className="from-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.protoTypes = {
  userSignupRequest:React.PropTypes.func.isRequired,
  addFlashMessage:React.PropTypes.func.isRequired
}

export default SignupForm*/

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      email:'',
      password:'',
      passwordConfirmation:'',
      timezone:'',
      errors:'',
      isLoading:false
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
    e.preventDefault();

    this.setState({errors:{},isLoading:true});
    this.props.userSignupRequest(this.state).then(
      () => {},
      (data) => {this.setState({errors:data.response.data,isLoading:false})}
    );
    // if(this.isValid()){
    //   this.setState({errors:{},isLoading:true});
    //   this.props.userSignupRequest(this.state).then(
    //     () => {
    //       this.props.addFlashMessage({
    //         type:'success',
    //         text:'dddddddd'
    //       });
    //       browserHistory.push('/');
    //     },
    //     (data) => {this.setState({errors:data.response.data,isLoading:false })}
    //   )
    // }
  }
  render(){ 
    const  options = map(timezones,(val,key) =>
      <option key={val} value={val}>{key}</option>
    );
    const {errors} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Hello</h1>
        
        <div className={classnames("form-gruop",{"has-error":errors.username})} >
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type='text'
            name='username'
            className="form-control"
          />
          {errors.username && <span className="help-block">{errors.username}</span>}
       </div>

        <div className={classnames("form-gruop",{"has-error":errors.email})} >
          <label className="control-label">email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type='text'
            name='email'
            className="form-control"
          />
          {errors.email && <span className="help-block">{errors.email}</span>}
        </div>

         <div className={classnames("form-gruop",{"has-error":errors.password})} >
          <label className="control-label">password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type='password'
            name='password'
            className="form-control"
          />
          {errors.password && <span className="help-block">{errors.password}</span>}
        </div>

        <div className={classnames("form-gruop",{"has-error":errors.passwordConfirmation})} >
          <label className="control-label">passwordConfirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type='password'
            name='passwordConfirmation'
            className="form-control"
          />
           {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
        </div>

        <div className="form-gruop" >
          <label className="control-label">timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange.bind(this)}
            name="timezone"
            className="form-control"
          >
            <option value="" disabled>-----</option>
            {options}
          </select>
        </div>


        <div className="from-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.protoTypes = {
  userSignupRequest:React.PropTypes.func.isRequired
}

export default SignupForm