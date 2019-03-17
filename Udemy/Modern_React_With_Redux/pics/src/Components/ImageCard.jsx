import React, { Component } from 'react';

class ImageCard extends Component {
  constructor( props ) {
    super( props );

    this.state = { span: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener(
      'load',
      this.setSpans
    )
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil( height / 10 + 1 );

    this.setState( {
      span
    } )
  }

  render() {
    const { image } = this.props;
    const { span } = this.state;
    
    return(
      <div style={{ gridRowEnd: `span ${span}` }}>
        <img
          alt={ image.alt_description }
          ref={ this.imageRef }
          src={ image.urls.regular }
        />
      </div>
    )
  }

}

export default ImageCard;