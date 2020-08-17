import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'


class LoginForm extends Component {
    constructor(){
		super()
		this.state ={
			email:'',
			password:'',
			isAuthorized:false
		}
	}
	onEmailChange(event){
		
		this.setState({...this.state, email:event.target.value})
	}
	onPasswordChange(event){
		this.setState({...this.state, password:event.target.value})
	}
	toggleButton(){
		if(this.state.isAuthorized === false){
			return (<button style = {styles.buttonStyle} onClick= {this.onSubmit.bind(this)}>Submit</button>)
		}else{
			return (<span>Loading ...</span>)
		}
	}
	onSubmit() {
        const { email, password } = this.state
        this.loginUser(email, password)
    }
    render() {
		const {inputContainer,labelStyle,titleStyle} =styles
        return <div style = {inputContainer}>
			<p style ={titleStyle}> Sign In </p>
				<label style= {labelStyle} >Email:
				<input type= 'text' 
					placeholder ='abc@gmail.com'
					value = {this.state.email}
						// callback need to bind to this
					onChange = {this.onEmailChange.bind(this)}required></input>
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
				<Link to='/create'>create an account</Link>
		</div>
	}
	loginUser(email,password){
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => {
				this.setState({...this.state, isAuthorized: true})
				this.props.history.push(`user/${firebase.auth().currentUser.uid}`)
			}).catch(() =>{
					//display error message
			})
			
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
		fontSize: 20,
		fontWeight: 'bold'
	}
}

export default LoginForm
