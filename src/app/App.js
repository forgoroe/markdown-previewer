import React from "react";
import marked from 'marked';

import { TextArea } from "./components/TextArea";
import { Preview } from "./components/Preview";


export class App extends React.Component{
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-6">
						<TextArea />
					</div>
					<div className="col-xs-6">
						<Preview />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
					<h2>I will add markdown reference here</h2>
					</div>
				</div>
			</div>
		);
	}
};