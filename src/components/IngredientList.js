import React from 'react'
import Ingredient from './Ingredient'

function IngredientsList(props) {
	return (
		<div className='ingredients'>
			{/* <Ingredient amount='1' measurement='KG' name='XYZ' />
			<Ingredient amount='1' measurement='KG' name='XYZ' />
			<Ingredient amount='1' measurement='KG' name='XYZ' /> */}

			{props.list.map((ingredient, index) => (
				<Ingredient key={index} amount={ingredient.amount} measurement={ingredient.measurement} name={ingredient.name} />
			))}
		</div>
	)
}

export default IngredientsList
