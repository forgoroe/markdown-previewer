import React from "react";
import marked from 'marked';

var Preview = React.createClass({
	render: function(){
	var result = marked(this.props.content);
		return (
				<div dangerouslySetInnerHTML={{__html: result}}></div>
		);
	}
});

module.exports.Preview = Preview;