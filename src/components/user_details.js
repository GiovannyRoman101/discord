import React, {Component} from 'react'
import firebase from 'firebase'
import CreateChannelForm from './create_channel_form'

class UserDetails extends Component{
	constructor(){
		super()
		this.state ={
			user:null,
			channels:[],
			channelSelected:null,
			isCreated:false
		}
	}
	componentWillMount(){
		firebase.auth().onAuthStateChanged((user)=>{
			firebase.database().ref('/users/'+ user.uid).on('value',(snapshot)=>{
				this.setState({...this.state,user:snapshot.val()})
			})
		})
	}
	toggleChannelCreation(){
		const {isCreated} = this.state
		this.setState({...this.state, isCreated: !isCreated})
	}

	render(){
		const {sidebarStyle, bodyStyle, buttonStyle, textStyle} = styles
		return (
			<div style = {bodyStyle} className = 'container'>
				<div className ='row'>
				<div style = {sidebarStyle} className ='col-xs'>
					<h2 style = {textStyle}>Starred Channels</h2>
					{/* {this.renderChannels(this.state.channels)} */}
					<h2 style = {textStyle}>Channels</h2>
					<br/>
					{this.renderChannels(this.state.channels)}
					<button onClick ={this.toggleChannelCreation.bind(this)} style ={buttonStyle}> + </button>
				</div>
				
				<div className ='col-md' >
					{this.renderInfo()}
				</div>
				</div>
			</div>
			
			)
	}

	renderChannels(channelList){
		if(channelList !== null || channelList.length !== 0){
			return channelList.map(channel =>{
				return <button>{channel.name}</button>
			})
		}else{
			console.log('in channel renmder')
			return(
				<div>
					<p> No channels </p>
				</div>
			)
		}
		
	}

	renderInfo(){
		if(this.state.isCreated){
			return (<CreateChannelForm name = {this.state.user.username} isCreated = {this.toggleChannelCreation.bind(this)}></CreateChannelForm>)
		}else if(this.state.channelSelected !== null){
			return (
				<div>
					<p> TODO </p>
				</div>
			)
		}else{
			return (
				<div>
					<p>select a channel or create a new channel.</p>
				</div>
			)
		}
	}
}

const styles ={
	sidebarStyle:{
		display: 'flex',
		flexDirection: 'column',
		borderRadius:'20px',
		border:'5px solid black',
		background: '#F0F8FF',
		textAlign:'center',
		width:'20vw',
		alignSelf:'stretch',
		height:'82vh',
		marginLeft:'5px'

	},
	channelBoxStyle:{},
	bodyStyle:{
		float:'left'
	},
	textStyle:{
		borderBottom:'3px solid',
		margin:'10px'
	}
	,
	buttonStyle:{
		margin: '3px',
		background:'#E6E6FA',
		fontFamily:'Courier New',
		fontSize: 18,
		fontWeight: 'bold',
		border: '2px solid black',
		borderRadius: '12px'
	},
	creationStyle:{
		
	}
	
}


export default UserDetails