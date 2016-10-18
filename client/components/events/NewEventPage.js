/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import EventForm from './EventForm';

class NewEventPage extends React.Component {
  render(){
    return ( 
      <div>
        <EventForm />
      </div>
    )
  }
}

/*SignupForm.protoTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists:React.PropTypes.func.isRequired
};*/

/*export default connect(null,{ userSignupRequest,addFlashMessages,isUserExists})(SignupPage);*/
export default NewEventPage;