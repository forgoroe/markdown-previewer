import React from "react";

export class Header extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-inverse">
			  <div className="container">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="https://github.com/forgoroe/markdown-previewer" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>			    
				    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	        			<span className="icon-bar"></span>
	        			<span className="icon-bar"></span>                 
	      			</button>
	      		</div>
      			<div className="collapse navbar-collapse" id="myNavbar">
				    <ul className="nav navbar-nav">
				      <li className="navButton"><a href="#" id="readme" role="button" onClick={this.props.onClick}>Readme.md</a></li>
				      <li className="navButton"><a href="#" id="theApp" role="button" onClick={this.props.onClick}>The App</a></li>
				    </ul>
			    </div>
			  </div>
			</nav>	
			);
	}
}