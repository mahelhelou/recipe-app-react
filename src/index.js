import React from 'react'
import ReactDOM from 'react-dom'
import './Index.css'

// Components
import Menu from './components/Menu'
import data from './data/recipes.json'

ReactDOM.render(
	<React.StrictMode>
		<Menu recipes={data} />
	</React.StrictMode>,
	document.getElementById('root')
)
