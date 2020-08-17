import React from 'react'
import {BrowserRouter,Route,Switch}from 'react-router-dom'
import LoginForm from './components/login_form'
import CreateForm from './components/create_form'
import UserDetails from './components/user_details'

function Routes(){
	return (
		<div>
			<BrowserRouter>
			<Switch>
			<Route path ='/users/:id' exact component ={UserDetails}/>
			<Route path= '/create' exact component= {CreateForm}/>
			<Route path= '/' exact component= {LoginForm}/>
			</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Routes