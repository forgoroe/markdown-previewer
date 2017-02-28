import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { App } from "./App";

var Index = React.createClass({
getInitialState(){
		return {readmeOrApp: 'readme.md'};
	},

handleClick: function(e){
	if(e.target.textContent.toLowerCase() == 'readme.md'){
		this.setState({readmeOrApp: 'readme.md'});
	} else {
		this.setState({readmeOrApp: 'markdown previewer'});
	}
},

render: function() {
	switch(this.state.readmeOrApp){
		case 'readme.md':
		return (
        <div className="container">
        	<div className="row">
        		<div className="col-md-10 col-md-offset-2">
        			<Header onClick={this.handleClick}/>
        		</div>
        	</div>
        	<div className="row">
        		<div className="col-md-10 col-md-offset-2">
        			<Home />
        		</div>
        	</div>
        </div>
   	 	);
		break;

		case 'markdown previewer':
		return(
			<div className="container">
        		<div className="row">
        			<div className="col-md-10 col-md-offset-2">
        				<Header onClick={this.handleClick}/>
        			</div>
        		</div>
        		<div className="row">
        			<div className="col-md-10 col-md-offset-2">
        				<App />
        			</div>
        		</div>
        	</div>);

		break;
		};
    }
});

render(<Index />, document.getElementById('root'));

