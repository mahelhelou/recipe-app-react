import React from 'react'

// A component to render the cooking instructions for each recipe
function Instructions(props) {
	return (
		<div className='instructions'>
			{/* <h2>Cooking Instructions</h2>
			<p>Lorem ipsum dolor sit amet.</p>
			<p>Lorem ipsum dolor sit amet.</p>
			<p>Lorem ipsum dolor sit amet.</p> */}

			{/* We can pass titles like: “Cooking Instructions,” “Baking Instructions,” “Prep Instructions,” or a “Pre-cook Checklist” — anything that has steps. */}
			<h3>{props.title}</h3>
			{props.steps.map((step, index) => (
				<p key={index}>{step}</p>
			))}
		</div>
	)
}

export default Instructions
