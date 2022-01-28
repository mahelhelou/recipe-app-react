import React from 'react'
import IngredientsList from './IngredientList'
import Instructions from './Instructions'

function Recipe(props) {
	return (
		<section id={props.name.toLowerCase().replace(/ /g, '-')}>
			<IngredientsList list={props.ingredients} />
			<Instructions title='Cooking Instructions' steps={props.steps} />
		</section>
	)
}

export default Recipe
