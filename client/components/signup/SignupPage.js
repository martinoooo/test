/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import SignupForm from './SignupForm';
import {userSignupRequest} from '../../actions/signupActions';
//import {addFlashMessages} from '../../actions/flashMessages';
import {connect} from 'react-redux'

/*class SignupPage extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={this.props.userSignupRequest} addFlashMessage={this.props.addFlashMessages}/>
        </div>
      </div>
    )
  }
}

export default connect(null,{userSignupRequest,addFlashMessages})(SignupPage);*/

class SignupPage extends React.Component {
  render(){
    const {userSignupRequest} = this.props;
    return ( 
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest}/>
        </div>
      </div>
    )
  }
}

SignupForm.protoTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null,{userSignupRequest})(SignupPage);