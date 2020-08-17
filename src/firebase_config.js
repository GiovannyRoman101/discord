import firebase from 'firebase'

const FireBaseConfig = () => {
	var firebaseConfig = {
		apiKey: "AIzaSyCZUkk3QuozuA2Y8y8_txYhUxw7uv04HqQ",
		authDomain: "discord-1b8b9.firebaseapp.com",
		databaseURL: "https://discord-1b8b9.firebaseio.com",
		projectId: "discord-1b8b9",
		storageBucket: "discord-1b8b9.appspot.com",
		messagingSenderId: "1006413229160",
		appId: "1:1006413229160:web:39a3a8e1d968661edcdfdd",
		measurementId: "G-262119DZM3"
	}
	  // Initialize Firebase
	firebase.initializeApp(firebaseConfig)
	firebase.analytics()
}

export default FireBaseConfig