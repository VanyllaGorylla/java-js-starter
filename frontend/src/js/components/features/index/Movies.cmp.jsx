
import React from 'react';

const Movies = ({ movies }) => {
	let list = movies.map(m => (<li className="collection-item">{m.title}</li>));

	return (<ul className="collection" >
		{list}
	</ul >);
};

export default Movies;
