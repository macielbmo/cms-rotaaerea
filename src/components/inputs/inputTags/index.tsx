import { Component } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import { Container } from './style'

export default class InputTags extends Component {
  constructor () {
    super()
    this.state = {
      tags: []
    }
  }

  handleChange = (tags) => {
    this.setState({ tags })
    this.props.handleTags(tags)
  }

  render () {
    return (
      <Container>
        <label>Input de Tags</label>
        <TagsInput
          value={this.state.tags}
          onChange={this.handleChange}
        />
      </Container>
    )
  }
}
