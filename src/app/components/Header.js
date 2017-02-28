import React from "react";

export class Header extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand">Markdown Previewer</a>
			    </div>
			    <ul className="nav navbar-nav">
			      <li><a href="#" id="readme" onClick={this.props.onClick}>Readme.md</a></li>
			      <li><a href="#" id="theApp" onClick={this.props.onClick}>The App</a></li>
			    </ul>
			  </div>
			</nav>	
			);
	}
}