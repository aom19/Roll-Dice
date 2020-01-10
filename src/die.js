import React , {Component } from  'react';
import "./die.css"

class Dei extends Component{
	render(){
		return <i class={`die fas fa-dice-${this.props.face}`} />
	}
}
export default Dei;