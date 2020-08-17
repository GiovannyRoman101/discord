import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import FireBaseConfig from './firebase_config'
import 'bootstrap/dist/css/bootstrap.min.css'



FireBaseConfig()
ReactDOM.render( <App />,document.getElementById('root'))

