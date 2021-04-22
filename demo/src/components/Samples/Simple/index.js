import React, { Component } from 'react'
import Annotation from '../../../../../src'

import Root from '../../Root'
import img from '../../../img.jpeg'

export default class Simple extends Component {
  state = {
    annotations: [],
    annotation: {}
  }

  onChange = (annotation) => {
    this.setState({ annotation })
  }

  onSubmit = (annotation) => {
    const { geometry, data } = annotation

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      })
    })
  }

  imageLoaded = () => {
    console.log('Ready');
  }

  imageFailed = () => {
    console.log('Failed');
  }

  render () {
    return (
      <Root>
        <Annotation
          src={img}
          alt='Two pebbles anthropomorphized holding hands'
          annotations={this.state.annotations}
          disableAnnotation={false}
          disableOverlay={false}
          type={this.state.type}
          value={this.state.annotation}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onImageLoad={this.imageLoaded}
          onImageError={this.imageFailed}
          allowTouch>
        </Annotation>
      </Root>
    )
  }
}
