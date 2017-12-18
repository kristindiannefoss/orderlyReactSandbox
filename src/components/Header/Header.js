import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		return (
			<header className='Header'>
				<div className='header-container'>
					<div className='control-pannel'>
  					<div className='pannel-button'>
  						<Link to='/' activeClassName='is-active' onlyActiveOnIndex={true}>
  							<div className='button-section'>
  								<img src='images/virtual-care.png'/>
								</div>
								<div className='button-section'>
  								<span className='nav-label'>
  									{ 'DOCTORS' }
  								</span>
  							</div>
  						</Link>
  					</div>
  					<div className='pannel-button'>
  						<Link to='#' activeClassName='is-active'>
  							<div className='button-section'>
  								<img src='images/discounts.png'/>
								</div>
								<div className='button-section'>
  								<span className='nav-label'>
  									{ 'MEDICATION' }
  								</span>
  							</div>
  						</Link>
  					</div>
  					<div className='pannel-button'>
  						<Link to='#' activeClassName='is-active'>
  							<div className='button-section'>
  								<img src='images/insurance.png'/>
								</div>
								<div className='button-section'>
  								<span className='nav-label'>
  									{ 'INSURANCE' }
  								</span>
  							</div>
  						</Link>
  					</div>
  					<div className='pannel-button'>
  						<Link to='#' activeClassName='is-active'>
  							<div className='button-section'>
  								<img src='images/human-support.png'/>
								</div>
								<div className='button-section'>
  								<span className='nav-label'>
  									{ 'CHAT' }
  								</span>
  							</div>
  						</Link>
  					</div>
  					<div className='pannel-button'>
  						<Link to='/contact' activeClassName='is-active'>
  							<div className='button-section'>
  								<img src='images/user-response.png'/>
								</div>
								<div className='button-section'>
  								<span className='nav-label'>
  									{ 'ACCOUNT' }
  								</span>
  							</div>
  						</Link>
  					</div>
  				</div>
  				<div>
  					<Link to='/about' activeClassName='is-active'>
  						ABOUT US
  					</Link>
  				</div>
				</div>
			</header>
		);
	}
});
