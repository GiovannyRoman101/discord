
import React,{Component} from 'react'
import firebase from 'firebase'

class CreateChannelForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			name:'',
			description:''
		}
	}
	onNameChange(event){
		this.setState({...this.state, name: event.target.value})
	}
	onDescriptionChange(event){
		this.setState({...this.state, description:event.target.value})
	}
	onSubmit(){
		const {email,password} = this.state
		this.createUser(email,password)
	}


	createChannel(){
		const {user} = this.props
		console.log(user)
		console.log(this.state)
		const {name,description} =this.state
		firebase.database().ref('/channels').set({
			name,
			description,
			createdby: user.username,
			messages: []
		})
	}
	render(){
		const {buttonStyle, inputContainer} = styles
		return (
			<div >
			<p > Create a Channel </p>
				<label>Name: 
				<input type= 'text' 
					placeholder ='Philip Fry'
					style ={inputContainer}
					value = {this.state.name}
					onChange = {this.onNameChange.bind(this)}required></input>
				</label>
				<br/>
				<label >Description: 
				<input type= 'text' 
					placeholder ='Philip fry is a character from the show futurama.'
					style = {inputContainer}
					value = {this.state.username}
					onChange ={this.onDescriptionChange.bind(this)}
						required></input>
				</label>
				<br/>
				<button style ={buttonStyle}>submit</button>
				<br/>
		</div>
		)
	}
}
const styles ={
	inputContainer:{
		width:'100%'
	},
	labelStyle:{
		fontFamily:'Courier New',
		fontSize: 18,
		fontWeight: 'bold',
	},
	buttonStyle:{
		margin: '3px',
		background:'#E6E6FA',
		fontFamily:'Courier New',
		fontSize: 18,
		fontWeight: 'bold',
		border: '2px solid black',
		borderRadius: '12px'
	},
	titleStyle:{
		fontFamily:'Courier New',
		fontSize: 22,
		fontWeight: 'bold'
	}
}
export default CreateChannelForm