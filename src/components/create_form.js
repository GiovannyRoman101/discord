import React, { Component } from 'react'
import firebase from 'firebase'

class CreateForm extends Component {
	constructor(){
		super()
		this.state ={
			email:'',
			password:'',
			username:'',
			isAuthorized:false
		}
	}
	onEmailChange(event){
		
		this.setState({...this.state, email:event.target.value})
	}
	onPasswordChange(event){
		this.setState({...this.state, password:event.target.value})
	}
	onUsernameChange(event){
		this.setState({...this.state, username:event.target.value})
	}
	toggleButton(){
		if(this.state.isAuthorized === false){
			return (<button style = {styles.buttonStyle} onClick= {this.onSubmit.bind(this)} >Submit</button>)
		}else{
			return (<span>Loading ...</span>)
		}
	}
	createUser(email,password){
		firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
			firebase.database().ref('/users/'+firebase.auth().currentUser.uid).set(
				{username:this.state.username,
				messages:[],
				favorite_channels:[]}
				)
			this.props.history.push(`users/${firebase.auth().currentUser.uid}`)
			this.setState({...this.state, isAuthorized: true})
			}).catch(()=>{
				//display error message
			})
	}
	onSubmit(){
		const {email,password} = this.state
		this.createUser(email,password)
	}

	render(){
		const {inputContainer,labelStyle,titleStyle} =styles
		return <div style = {inputContainer}>
			<p style ={titleStyle}> Create an Account </p>
				<label style= {labelStyle} >Email:
				<input type= 'text' 
					placeholder ='abc@gmail.com'
					value = {this.state.email}
						// callback need to bind to this
					onChange = {this.onEmailChange.bind(this)}required></input>
				</label>
				<br/>
				<label style= {labelStyle}>Username:
				<input type= 'text' 
					placeholder ='metalgearsolid'
					value = {this.state.username}
						// callback need to bind to this
					onChange ={this.onUsernameChange.bind(this)}
						required></input>
				</label>
				<br/>
				<label style= {labelStyle}>Password:
				<input type='password' 
					placeholder ='password'
					onChange = {this.onPasswordChange.bind(this)}
					value ={this.state.password} required>
				</input>
				</label>
				<br/>
				{this.toggleButton()}
				<br/>
		</div>
	}
}
const styles ={
	inputContainer:{
		borderRadius:'20px',
		border:'5px solid black',
		background: '#F0F8FF',
		textAlign:'center',
		marginLeft:'5px',
		marginRight:'5px'
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

export default CreateForm