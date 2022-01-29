import React from 'react'
import Recipe from './Recipe'

// A component to render all recipes in our app
function Menu(props) {
	return (
		<article>
			<header>
				<h1>Delicious Recipes</h1>
			</header>
			<div className='recipes'>
				{/* <Recipe />
				<Recipe /> */}

				{props.recipes.map((recipe, index) => (
					<Recipe key={index} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} />
				))}
			</div>
		</article>
	)
}

export default Menu
