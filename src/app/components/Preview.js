import React from "react";
import marked from 'marked';

var Preview = React.createClass({
	render: function(){
	
	var result = marked(this.props.content);
		return (
				<div className="preview" dangerouslySetInnerHTML={{__html: result}}/>		
		);
	}
});

module.exports.Preview = Preview;