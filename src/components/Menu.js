import React from 'react'
import Recipe from './Recipe'

function Menu(props) {
	return (
		<article>
			<header>
				<h1>Delicious Recipes</h1>
			</header>
			<div className='recipes'>
				{props.recipes.map((recipe, index) => (
					<Recipe key={index} />
				))}
			</div>
		</article>
	)
}

export default Menu
