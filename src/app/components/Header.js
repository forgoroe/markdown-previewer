import React from "react";

export class Header extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-inverse">
			  <div className="container">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="https://github.com/forgoroe/markdown-previewer" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
			    </div>
			    <ul className="nav navbar-nav">
			      <li><a href="#" id="readme" className="navButton" onClick={this.props.onClick}>Readme.md</a></li>
			      <li><a href="#" id="theApp" className="navButton" onClick={this.props.onClick}>The App</a></li>
			    </ul>
			  </div>
			</nav>	
			);
	}
}