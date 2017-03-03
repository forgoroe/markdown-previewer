import React, { Component } from "react";
import marked from 'marked';
import readme from '../../../README.md';

export class Home extends React.Component{
	render(){
		var result = marked(readme);
		return(
			<div className="container">
				<div className="row">
					<div dangerouslySetInnerHTML={{__html: result}} className="col-md-6"/>
				</div>
			</div>
		);
	}
}