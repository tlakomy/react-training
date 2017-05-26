import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  	render() {
  		let text = this.props.text;
		return (
	    	<h1 className={this.props.className}>
                {text}
            </h1>
		);
    }
}

App.propTypes = {
	name: PropTypes.string.isRequired,
	surname: PropTypes.string,
	className: PropTypes.string
}

App.defaultProps = {
    className: 'red'
}

export default App;
