import React , {Component} from 'react';
import Die from './die'
import './roll-dice.css'


class RollDice extends Component{
	static defaultProps ={
		sides :["one" , "two" , "three" , "four" , "five" , "six"]
	};
	constructor(props){
		super(props);
		this.state = {
			die1: 'one',
			die2: 'four'
		};
		this.roll = this.roll.bind(this);
	}
roll(){
	const newDie1=this.props.sides[
		Math.floor(Math.random() * this.props.sides.length)
	];
	const newDie2=this.props.sides[
		Math.floor(Math.random() * this.props.sides.length)
	];
	this.setState({
		die1 : newDie1 ,
		die2 : newDie2
	});
}
	render(){
		return( 
			<div>
				<Die face={this.state.die1} />
				<Die face={this.state.die2} />
				<div className="middle">
					<button 
						className="btn" 
						onClick={this.roll} >
						
						 <span  className = "i">
						 	Roll Dice
						</span>
					</button>
				</div>
			</div>
		);
	}
}

export default RollDice;