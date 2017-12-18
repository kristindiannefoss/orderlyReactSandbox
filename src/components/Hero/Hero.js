import React, { Component } from 'react';
import { Link } 						from 'react-router';
import Slider               from './components/Slider';

class Hero extends Component {
  constructor(props) {
    super(props);
  }

	renderBlurbs() {
		const loadedBlurbs = this.props.blurbs;

		return loadedBlurbs.map((blurb) => (
			<Slider
				key={ 'slider-' + blurb.slug }
				title={ blurb.title}
				icon={ blurb.icon }
				body={ blurb.body }
				more={ blurb.more }
				maxWidth={ blurb.maxWidth }
			/>
		));
	}

	render() {
		return (
			<div className='Hero'>
				<div className="loiue-big">
					<img src="/images/louiehappy.png"/>
				</div>
				<section className="content-blurb-section">
					{ this.renderBlurbs() }
				</section>
				<section className="how-help">
					{ "HERE'S HOW I CAN HELP" }
				</section>
			</div>
		);
	}
}

module.exports = Hero;
