/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import { connect } from 'react-redux';
import { addFlashMessages } from '../actions/flashMessages'
import {browserHistory} from 'react-router';

export default function (ComposedComponent){
	class Authenticate extends React.Component {
		componentWillMount(){
			if(!this.props.isAuthenticated){
				this.props.addFlashMessages({
					type:'error',
					text:'dsdfsdfsdfsd'
				})
				browserHistory.push('/login')
				//this.context.router.push('/login');
			}
		}

		componentWillUpdate(nextProps){
			if(!nextProps.isAuthenticated){
				browserHistory.push('/');
			}
		}
		render(){
		    return (
		    	<div>
			      <ComposedComponent {...this.props} />
		      	</div>
		    )
		}
	}

	Authenticate.propTypes = {
		isAuthenticated:React.PropTypes.bool.isRequired,
		addFlashMessages:React.PropTypes.func.isRequired
	}
/*
	Authenticate.contextType = {
		router:React.PropTypes.object.isRequired
	}*/

	function mapStateToProps(state){
		return{
			isAuthenticated:state.auth.isAuthenticated
		}
	}

	return connect(mapStateToProps,{ addFlashMessages })(Authenticate);
}
