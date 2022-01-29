import React from 'react'
import IngredientsList from './IngredientList'
import Instructions from './Instructions'

// A component to render a single recipe in our app
function Recipe(props) {
	return (
		<section id={props.name.toLowerCase().replace(/ /g, '-')}>
			{/* <IngredientsList />
			<Instructions /> */}

			<h2>{props.name}</h2>
			<IngredientsList title='Recipe Ingredients' list={props.ingredients} />
			<Instructions title='Cooking Instructions' steps={props.steps} />
		</section>
	)
}

export default Recipe
