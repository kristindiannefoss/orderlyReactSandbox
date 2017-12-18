import React from 'react';
import DocTitle from 'react-document-title';

const html = ``;

export default React.createClass({
	render() {
		return (
				<div className='About'>
					<DocTitle title='About Us'/>
					<div dangerouslySetInnerHTML={{__html: html}}/>
					<div className="examples-container">
						<div className="example">
							<div className="heading">
								{ "Unlimited chat with your healthcare assistant" }
							</div>
							<div className="body">
								{ "That's me, Louie 😉 Chat me up anytime to to get answers to your healthcare questions and concerns." }
							</div>
							<img src={ "images/icon-unlimited-chat.svg " }/>
						</div>
						<div className="example">
							<div className="heading">
								{ "I can tell you the cost of medications and services" }
							</div>
							<div className="body">
								{ "Rest easy knowing what your medications and health services will cost you – all before pulling out your wallet."}
							</div>
							<img src={ "images/icon-cost.svg" }/>
						</div>
						<div className="example">
							<div className="heading">
								{ "I'll find you discounts on prescription medications"}
							</div>
							<div className="body">
								{ "You heard me right! I'll work hard to save you even more money by locating discounts on medications in your area." }
							</div>
							<img src={ "images/icon-discounts.svg" }/>
						</div>
						<div className="example">
							<div className="heading">
								{ "I'll help you find highly rated doctors" }
							</div>
							<div className="body">
								{ "Leave it to me to find covered doctors who are accepting new patients, complete with bios and reviews from real patients." }
							</div>
							<img src={ "images/icon-highly-rated.svg" }/>
						</div>
						<div className="example">
							<div className="heading">
								{ "I'll find you a plan that works for all of your needs" }
							</div>
							<div className="body">
								{ "Searching for the perfect plan can feel like a chore. I'll make it easy by connecting you with our partners." }
							</div>
							<img src={ "images/icon-insurance-plan.svg" }/>
						</div>
						<div className="example">
							<div className="heading">
								{ "I'll make sure that a live human is ready to jump in" }
							</div>
							<div className="body">
								{ "If I can't help you out, or if you just want to talk to a person, I'll be sure to connect you with one in seconds." }
							</div>
							<img src={ "images/icon-human-support.svg" }/>
						</div>
						<div className="example">
							<div className="heading">
								{ "I'll connect you with Colorado licensed doctors*" }
							</div>
							<div className="body">
								{ "Virtually visit with Colorado licensed doctors to receive referrals, prescriptions, or review health concerns." }
							</div>
							<img src={"images/icon-virtual-doc-visit.svg" }/>
						</div>
						<div className="example">
							<div className="heading">
								{ "I'll provide on demand Urgent Care solutions*" }
							</div>
							<div className="body">
								{ "Emergencies happen, and I'm here to help. I'll get you connected to our ER partners quickly and efficiently." }
							</div>
							<img src={ "images/icon-ambulance-urgent-care.svg" }/>
						</div>
					</div>
				</div>
	);
}
});
