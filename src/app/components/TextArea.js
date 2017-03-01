import React from "react";


var TextArea = React.createClass({
	render: function(){
		return ( 
        	<textarea defaultValue={this.props.defaultValue} onChange={this.props.onChange} placeholder="Start typing markdown to get a preview...">
            
            </textarea>
        );
	}
});

module.exports.TextArea = TextArea;