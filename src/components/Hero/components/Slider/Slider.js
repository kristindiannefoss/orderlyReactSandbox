import React, { Component } from 'react';
import { Link } 						from 'react-router';
import ImageContainer       from '../ImageContainer';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyVisible : false,
      moreVisible : false,
      iconSize    : 'medium-icon',
    }
  }

  onSectionClick() {
    this.setState({ moreVisible: true, iconSize: 'large-icon' });
            // onClick={() => this.onSectionClick()} add somewhere
  }

  resondToMouseOver() {
    this.setState({ bodyVisible: true, titleVisible: true, iconSize: 'medium-icon' });
  }

  resondToMouseOut() {
    this.setState({ bodyVisible: false, titleVisible: false, iconSize: 'small-icon' });
  }

  render () {
    return (
      <section onMouseLeave={() => this.resondToMouseOut()}>
  			<div className="content-blurb"
          onMouseEnter={() => this.resondToMouseOver()}
          >
    				<ImageContainer
              imgClass={ this.state.iconSize }
              imgSrc={ this.props.icon }
              imgAlt={ this.props.slug }
              maxWidth={ this.props.maxWidth }
            />
            {
              this.state.titleVisible
                ? <div className="heading">{ this.props.title }</div>
                : null
            }
            {
              this.state.bodyVisible
                ? <div className="body">{ this.props.body }</div>
                : null
            }
            {
              this.state.moreVisible
                ? <div className="more">{ this.props.more }</div>
                : null
            }
  			</div>
      </section>
    )
  }
}

module.exports = Slider;
