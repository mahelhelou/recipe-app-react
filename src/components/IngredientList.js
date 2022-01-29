import React from 'react'
import Ingredient from './Ingredient'

// A component to render all ingredients for each recipe
function IngredientsList(props) {
	return (
		<ul className='ingredients'>
			{/* <Ingredient amount='1' measurement='KG' name='XYZ' />
			<Ingredient amount='1' measurement='KG' name='XYZ' />
			<Ingredient amount='1' measurement='KG' name='XYZ' /> */}
			<h3>{props.title}</h3>
			{props.list.map((ingredient, index) => (
				// From recipes.json file, every ingredient becomes an object
				// So, we passed the props values, but we don't know the exact value yet
				<Ingredient key={index} amount={ingredient.amount} measurement={ingredient.measurement} name={ingredient.name} />

				// Another way, using rest operator, it will pass all data in the component as props
				// <Ingredient key={index} {...ingredient} />
			))}
		</ul>
	)
}

export default IngredientsList
