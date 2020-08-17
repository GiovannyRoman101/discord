import React from 'react'

const Banner = () => {
	return (
		<header style ={styles.boxStyle}>
			<h1 style = {styles.bannerTextStyle}>Discord</h1>
		</header>
	)
}

const styles = {
	bannerTextStyle: {
		fontSize : '6vw',
		color:'#4B0082',
		fontFamily:'Courier New',
		borderRadius:'15px',
		border:'5px solid black',
		background: '#E6E6FA',
		margin:'5px'
	},
	boxStyle:{
		textAlign:'center',
		width:'100%'
	}
} 
export default Banner
