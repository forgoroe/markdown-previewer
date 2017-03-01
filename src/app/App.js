import React from "react";

import { TextArea } from "./components/TextArea";
import { Preview } from "./components/Preview";
import { Reference } from "./components/Reference";


export class App extends React.Component{
	constructor(props) {
    super(props);
    this.state = { value: "Headline\n=======\n\nSubtitle\n-----------\n \n### Subtitle of subtitle\n\n*italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nList:\n\n  * Coding\n  * Running\n  * Thinking\n\nNumbered list:\n\n  1. First\n  2. Second\n  3. Third\n\n *[A link to nowhere](#)*" };
  	};

	handleChange(e){
		this.setState({value: e.target.value});
	};
	
	render(){
		return (
			<div>
				<div className="col-md-6">
					<TextArea defaultValue={this.state.value} onChange={this.handleChange.bind(this)} />
				</div>
				<div className="col-md-5 col-md-offset-1">
						<Preview content={this.state.value}/>
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