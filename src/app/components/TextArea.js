import React from "react";


var TextArea = React.createClass({
	getInitialState(){
		return {value: ''};
	},
	render: function(){
		return ( 
        	<textarea onChange={this.props.onChange} placeholder="Start typing markdown to get a preview...">
            </textarea>
        );
	}
});

module.exports.TextArea = TextArea;