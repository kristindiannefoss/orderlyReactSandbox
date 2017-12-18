import { React, Component } from 'react';
import {Link} from 'react-router';

// export default React.createClass({

class PannelButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isIdle: true,
		};
	}
  //
	// const icon      = this.props.icon;
	// const path      = this.props.path;
	// const labelName = this.props.labelName;

	render() {
		return (
			<pannelButton className='pannelButton'>
				<div className='pannel-button-container'>
					<Link to={ this.props.path } activeClassName='is-active' onlyActiveOnIndex={ true }>
						<div className='button-section'>
							<img src={ this.props.icon }/>
						</div>
						<div className='button-section'>
							<span className='nav-label'>
								{ this.props.labelName }
							</span>
						</div>
					</Link>
				</div>
			</pannelButton>
		);
	}
}

module.exports = PannelButton;
