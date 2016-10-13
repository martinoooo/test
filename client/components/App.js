/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import NavigationBar from './NavigationBar';
/*import FlashMessagesList from './flash/FlashMessagesList'

 
	        <FlashMessagesList />
	        */

class App extends React.Component {
  render(){
    return (
    	<div className="container">
	        <NavigationBar />
	        {this.props.children}
      	</div>
    )
  }
}

export default App