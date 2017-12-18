import React, { Component } from 'react';
import { Link } 						from 'react-router';
import Hero from '../Hero/';
import DocTitle from 'react-document-title';
import sliderBlurbs from './constants/sliderBlurbs';

class Home extends Component{
  constructor(props) {
    super(props);
  }

	render() {
		return (
			<div className='Home'>
				<DocTitle title='Home Page'/>
				<Hero blurbs={ sliderBlurbs }/>
			</div>
		);
	}
}

module.exports = Home;
