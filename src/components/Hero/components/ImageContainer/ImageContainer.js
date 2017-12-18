import React, { Component } from 'react';

class ImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  adjustSize() {
    if (this.props.extraStyling) {

    }
  }

  render () {
    const { maxWidth, imgClass, imgSrc, imgAlt } = this.props;

    return (

      <section className="image-container">
				<img
          className={ imgClass  }
          src={ imgSrc }
          alt={ imgAlt }
          style={ { maxWidth } }
        />
      </section>
    )
  }
}

module.exports = ImageContainer;
