import React, { Component } from 'react'
import Routes from './routes'
import Banner from './components/banner'

class App extends Component {
	
	render(){
		
		return (
			<div >
				<Banner></Banner>
				<Routes></Routes>
			</div>
			)
	}
}



export default App 