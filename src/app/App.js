import React from "react";

import { TextArea } from "./components/TextArea";
import { Preview } from "./components/Preview";
import { Reference } from "./components/Reference";


export class App extends React.Component{
	constructor(props) {
    super(props);
    this.state = { value:"" };
  	};

	handleChange(e){
		this.setState({value: e.target.value});
	};
	
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<TextArea onChange={this.handleChange.bind(this)} />
					</div>
					<div className="col-md-6">
						<Preview content={this.state.value}/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
					<Reference />
					</div>
				</div>
			</div>
		);
	}
};