import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { App } from "./App";
import { activeNav } from "../activeNav";

var Index = React.createClass({
getInitialState(){
		return {readmeOrApp: 'readme.md'};
	},

handleClick: function(e){
    activeNav();
        
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
        			<Header onClick={this.handleClick}/>
        	</div>
        	<div className="row">
        		<div className="col-md-12">
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
        				<Header onClick={this.handleClick}/>
        		</div>
        		<div className="row">
        			<div className="col-md-12">
        				<App />
        			</div>
        		</div>
        	</div>);

		break;
		};
    }
});

render(<Index />, document.getElementById('root'));

