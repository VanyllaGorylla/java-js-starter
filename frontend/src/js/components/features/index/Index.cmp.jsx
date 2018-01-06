import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Movies from './Movies.cmp.jsx';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = { movies: [], error: null };
	}

	componentDidMount() {
		let url = `${__CONFIG__.REST_SERVER.URL}/movies`;
		axios.get(url).then(r => {
			this.setState({ movies: r.data });
		}).catch(err => {
			this.setState({ error: JSON.stringify(err) });
		});
	}

	render() {
		return (
			<div classNameName="container">
				<div className="row">
					<div className="col s12 m6">
						<div className="card">
							<div className="card-content">
								<span className="card-title">Movies</span>
								{
									_.isNil(this.state.error) ?
										<Movies movies={this.state.movies} /> :
										<p>{this.state.error}</p>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Index;
