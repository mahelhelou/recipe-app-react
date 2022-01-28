import React from 'react'

function Instructions(props) {
	return (
		<section className='instructions'>
			<h2>{props.title}</h2>
			{props.steps.map((step, index) => (
				<p key={index}>{step}</p>
			))}
		</section>
	)
}

export default Instructions
