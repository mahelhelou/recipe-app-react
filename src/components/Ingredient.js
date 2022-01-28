import React from 'react'

// A component to render every ingredient
function Ingredient(props) {
	return (
		<li>
			{props.amount} {props.measurement} {props.name}
		</li>
	)
}

export default Ingredient
